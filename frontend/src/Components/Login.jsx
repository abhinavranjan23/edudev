import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import useLogin from "../hooks/useLogin";
import { signInWithGoogle } from "../config/firebase";
import axios from "axios";
import { BASE_URL } from "../constants/constant";
import { setUser } from "../redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useSignup from "../hooks/useSignup";
import useOtpVerification from "../hooks/useOtpVerification";
import { formatTime } from "../utils/formatTime";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const location = useLocation();
  const data = location?.state;
  const { login, loading, error } = useLogin({ path: data?.path || "/" });
  const [gooleLoginError, setGoogleLoginError] = useState(null);
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const { signup, loading: signupLoading, error: signupError } = useSignup();
  const { t } = useTranslation();

  useEffect(() => {
    if (data && data.isSignUpPath) {
      console.log("setting up signup path");
      setIsSignUpForm(data.isSignUpPath);
    }
  }, []);

  const {
    isOtpSent,
    isOtpVerified,
    sendOtp,
    verifyOtp,
    timer,
    resendOtp,
    otpLoading,
  } = useOtpVerification();

  const [otp, setOtp] = useState("");

  const handleLoginClick = (e) => {
    // console.log("handleLoginClick");
    e.preventDefault();
    try {
      login({
        email: email,
        password: password,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const firebaseToken = await signInWithGoogle();
      const res = await axios.post(
        `${BASE_URL}auth/firebaseLogin`,
        {
          token: firebaseToken,
        },
        { withCredentials: true }
      );
      if (res.status === 200 || res.status === 201) {
        const { password: _, ...userWithoutPassword } = res.data.data;
        const { name, email, photoUrl, role } = userWithoutPassword;
        const user = {
          name,
          email,
          photoUrl,
          role,
        };
        dispatch(setUser(user));
        toast.success("Login Successful");

        navigate("/");
      } else {
        setGoogleLoginError(res.data.msg);
        toast.error(res.data.msg);
        setTimeout(() => {
          setGoogleLoginError(null);
        }, 2000);
      }
    } catch (err) {
      setGoogleLoginError(err.response.data.msg);
      setTimeout(() => {
        setGoogleLoginError(null);
      }, 2000);
    }
  };

  const handleSignupClick = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password || !role) {
        toast.error("All fields are required");
        return;
      }

      if (!isOtpSent) {
        await sendOtp(email);
        return;
      }

      if (isOtpSent && !isOtpVerified) {
        const verified = await verifyOtp(email, otp);
        if (!verified) return;
      }
      console.log("role data given", role);
      if (isOtpVerified) {
        signup({ name, email, password, role });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md '>
      {error || signupError || gooleLoginError ? (
        <Alert message={error || signupError || gooleLoginError} type='error' />
      ) : null}
      <h2 className='text-xl font-semibold text-center mb-4'>
        {isSignUpForm ? t("create_account") : t("login")}{" "}
      </h2>

      <form>
        {isSignUpForm && !isOtpSent && (
          <>
            <label className='block mb-1'>{t("name")}</label>
            <input
              type='text'
              className='input w-full mb-3 text-gray-400 dark:text-gray-200'
              placeholder={t("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className='block mb-1'>{t("email")}</label>
            <input
              type='email'
              className='input w-full mb-3 text-gray-400 dark:text-gray-200'
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className='block mb-1'>{t("role")}</label>
            <select
              className='input w-full mb-3 text-gray-400 dark:text-gray-200'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value='student'>{t("student")}</option>
              <option value='tutor'>{t("tutor")}</option>
            </select>

            <label className='block mb-1'>{t("password")}</label>
            <input
              type='password'
              className='input w-full mb-3 text-gray-400 dark:text-gray-200'
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        {isSignUpForm && isOtpSent && !isOtpVerified && (
          <>
            <p className='text-green-500 mb-2'>{t("otp_sent")}</p>
            <label className='block mb-1'>{t("enter_otp")}</label>
            <input
              type='text'
              className='input w-full mb-3 text-gray-400'
              placeholder={t("enter_otp")}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            {timer > 0 ? (
              <p className='text-sm text-gray-500 mb-2'>
                {t("otp_expires_in")}:{" "}
                <span className='font-medium'>{formatTime(timer)}</span>
              </p>
            ) : (
              <button
                className='btn btn-outline btn-sm'
                type='button'
                onClick={() => resendOtp(emailRef.current.value)}
              >
                {t("resend_otp")}
              </button>
            )}
          </>
        )}

        {!isSignUpForm && (
          <>
            <label className='block mb-1'>{t("email")}</label>
            <input
              type='email'
              className='input w-full mb-3 text-gray-400'
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className='block mb-1'>{t("password")}</label>
            <input
              type='password'
              className='input w-full mb-3 text-gray-400'
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        <button
          className='btn btn-neutral w-full mt-2'
          onClick={isSignUpForm ? handleSignupClick : handleLoginClick}
          disabled={loading || signupLoading || otpLoading}
          type='submit'
        >
          {loading || signupLoading || otpLoading ? (
            <span className='loading loading-spinner loading-sm'></span>
          ) : isSignUpForm ? (
            !isOtpSent ? (
              t("send_otp")
            ) : !isOtpVerified ? (
              t("verify_otp")
            ) : (
              t("register")
            )
          ) : (
            t("login")
          )}
        </button>

        <button
          className='btn btn-outline w-full mt-4'
          onClick={handleGoogleLogin}
          type='button'
        >
          <img
            src='https://cdn-icons-png.flaticon.com/512/2875/2875331.png'
            alt='Google'
            className='w-5 h-5'
          />
          {t("continue_google")}
        </button>

        <p className='text-sm mt-4 text-center'>
          {isSignUpForm ? t("already_have_account") : t("dont_have_account")}{" "}
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => {
              setIsSignUpForm(!isSignUpForm);
              setOtp("");
            }}
          >
            {isSignUpForm ? t("login") : t("register")}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
