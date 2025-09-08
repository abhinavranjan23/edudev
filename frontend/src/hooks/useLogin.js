import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { BASE_URL } from "../constants/constant";
import { toast } from "react-toastify";

const useLogin = ({ path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.msg || "Failed to login");
      }

      const data = await res.json();
      console.log(data);
      dispatch(setUser(data.data));
      toast.success("Login Successful");
      if (path && path == "/courses") {
        navigate("/courses");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message);
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
