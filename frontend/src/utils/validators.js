export const validateCourse = (data) => {
  const errors = [];
  if (!data.title) errors.push("Title is required");
  if (!data.description) errors.push("Description is required");
  if (!data.imageUrl) errors.push("Image URL is required");
  return errors;
};

export const validateTopic = (data) => {
  const errors = [];
  if (!data.courseId) errors.push("Course selection is required");
  if (!data.title) errors.push("Title is required");
  if (!data.content) errors.push("Content is required");
  return errors;
};

export const validateQuestion = (data) => {
  const errors = [];
  if (!data.topicId) errors.push("Topic selection is required");
  if (!data.questionText) errors.push("Question text is required");
  if (data.options.some((opt) => !opt))
    errors.push("All options must be filled");
  return errors;
};
