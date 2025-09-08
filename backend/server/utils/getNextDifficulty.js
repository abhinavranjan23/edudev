function getNextDifficulty(performance) {
  // Ensure performance object has all difficulty levels
  performance.easy = performance.easy || { attempted: 0, correct: 0 };
  performance.medium = performance.medium || { attempted: 0, correct: 0 };
  performance.hard = performance.hard || { attempted: 0, correct: 0 };

  const ratio = ({ attempted, correct }) => {
    return attempted > 0 ? correct / attempted : 0;
  };

  const easy = performance.easy;
  const medium = performance.medium;
  const hard = performance.hard;

  const easyRatio = ratio(easy);
  const mediumRatio = ratio(medium);
  const hardRatio = ratio(hard);

  // Define thresholds
  const MIN_ATTEMPTS = 3;
  const STRUGGLING_THRESHOLD = 0.6;
  const EXCELLING_THRESHOLD = 0.9;

  // Check performance conditions
  const isStrugglingOnMedium =
    medium.attempted >= MIN_ATTEMPTS && mediumRatio < STRUGGLING_THRESHOLD;
  const isExcellingOnEasy =
    easy.attempted >= MIN_ATTEMPTS && easyRatio > EXCELLING_THRESHOLD;
  const isExcellingOnMedium =
    medium.attempted >= MIN_ATTEMPTS && mediumRatio > EXCELLING_THRESHOLD;
  const isStrugglingOnHard =
    hard.attempted >= MIN_ATTEMPTS && hardRatio < STRUGGLING_THRESHOLD;

  // Difficulty adaptation logic
  // If excelling on easy and not struggling on medium, move to medium
  if (isExcellingOnEasy && !isStrugglingOnMedium) {
    return "medium";
  }

  // If excelling on medium and not struggling on hard, move to hard
  if (isExcellingOnMedium && !isStrugglingOnHard) {
    return "hard";
  }

  // If struggling on medium, go back to easy
  if (isStrugglingOnMedium) {
    return "easy";
  }

  // If struggling on hard, go back to medium
  if (isStrugglingOnHard) {
    return "medium";
  }

  // Default progression: if user has attempted medium questions, stay on medium
  if (medium.attempted >= MIN_ATTEMPTS) {
    return "medium";
  }

  // Default to easy for new users or those with insufficient data
  return "easy";
}

module.exports = getNextDifficulty;
