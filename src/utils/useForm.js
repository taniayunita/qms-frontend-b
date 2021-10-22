import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const useForm = (validate) => {
  const [hasAcccount, setHasAcccount] = useState(false);
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordConfirmReg, setPasswordConfirmReg] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors(validate(emailReg, passwordReg, passwordConfirmReg));
    if (passwordReg === passwordConfirmReg && /\S+@\S+\.\S+/.test(emailReg)) {
      axios
        .post("register", {
          username: emailReg,
          password: passwordReg,
        })
        .then((response) => {
          console.log("response >>", response);
          history.go(!hasAcccount);
          if (response.data.status === 200) {
            Swal.fire({
              title: "Done!",
              text: "Registrasi Berhasil",
              icon: "success"
            })
          }
        })
        .catch((err) => {
          console.log("error >>", err);
          Swal.fire({
            title: "Error",
            text: "Email telah terdaftar!",
            icon: "error"
          })
        });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validate(emailReg, passwordReg));
    if (/\S+@\S+\.\S+/.test(emailReg)) {
      axios
        .post("login", {
          username: emailReg,
          password: passwordReg,
        })
        .then((response) => {
          console.log("response >>", response);
          localStorage.setItem("token", response.data?.data.token);
          if (response.data.status === 200) {
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })
          }
          window.location.href = '/beranda'
        })
        .catch((error) => {
          console.log("error >>", error);
        });
    }
  };

  const handleForm = () => {
    setHasAcccount(!hasAcccount);
  };

  return {
    handleForm,
    handleRegister,
    handleLogin,
    emailReg,
    passwordReg,
    passwordConfirmReg,
    errors,
    hasAcccount,
    setEmailReg,
    setPasswordReg,
    setPasswordConfirmReg,
  };
};

export default useForm;
