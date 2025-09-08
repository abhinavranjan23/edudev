import { useState, useEffect, useRef } from "react";
import { api } from "../utils/api";
import { toast } from "react-toastify";

const useOtpVerification = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [timer, setTimer] = useState(300);
  const intervalRef = useRef(null);
  const [otpLoading, setOtpLoading] = useState(false);
  const startTimer = () => {
    setTimer(300);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) clearInterval(intervalRef.current);
        return prev - 1;
      });
    }, 1000);
  };

  const sendOtp = async (email) => {
    setOtpLoading(true);
    try {
      await api.post(`auth/sendOtp`, { email });
      toast.success("OTP sent to your email");
      setIsOtpSent(true);
      startTimer();
    } catch (err) {
      toast.error(err?.response?.data?.msg || "Failed to send OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  const verifyOtp = async (email, otp) => {
    setOtpLoading(true);
    try {
      const res = await api.post(`auth/verifyOtp`, {
        email,
        otp,
      });
      if (res.data.success) {
        toast.success("OTP verified");
        setIsOtpVerified(true);
        clearInterval(intervalRef.current);
        return true;
      } else {
        toast.error("Invalid OTP");
        return false;
      }
    } catch (err) {
      toast.error(err?.response?.data?.msg || "OTP verification failed");
      return false;
    } finally {
      setOtpLoading(false);
    }
  };

  const resendOtp = async (email) => {
    await sendOtp(email);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    isOtpSent,
    isOtpVerified,
    timer,
    sendOtp,
    verifyOtp,
    resendOtp,
    otpLoading,
  };
};

export default useOtpVerification;
