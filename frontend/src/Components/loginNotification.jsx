import Swal from "sweetalert2";

const loginPopUp = ({ navigate, path, t }) => {
  Swal.fire({
    icon: "error",
    title: t("opps"),
    text: t("NotLogin"),
    confirmButtonText: t("login"),
    showCancelButton: true,
    cancelButtonText: t("register"),
    cancelButtonColor: "#2dcfcf",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/login", { state: { isSignUpPath: false, path: path } });
    } else {
      navigate("/login", { state: { isSignUpPath: true, path: path } });
    }
  });
};

export default loginPopUp;
