import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import useForm from "utils/useForm";
import validate from "utils/validationInfo";

export default function LoginForm() {
  const {
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
  } = useForm(validate);

  return (
    <section className="auth">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card card-shadow">
              <div className="card-body border rounded">
                <div className="text-center pb-4 pt-4">
                  <BrandIcon />
                </div>
                {hasAcccount ? (
                  <>
                    <form onSubmit={handleRegister}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          name="email"
                          value={emailReg}
                          onChange={(e) => {
                            setEmailReg(e.target.value);
                          }}
                        />
                        {errors.emailReg && (
                          <p style={{ color: "red" }}>{errors.emailReg}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          name="password"
                          value={passwordReg}
                          onChange={(e) => {
                            setPasswordReg(e.target.value);
                          }}
                        />
                        {errors.passwordReg && (
                          <p style={{ color: "red" }}>{errors.passwordReg}</p>
                        )}
                      </div>
                      <div className="form-group pb-4">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Confirm Password"
                          name="password2"
                          value={passwordConfirmReg}
                          onChange={(e) => {
                            setPasswordConfirmReg(e.target.value);
                          }}
                        />
                        {errors.passwordConfirmReg && (
                          <p style={{ color: "red" }}>{errors.passwordConfirmReg}</p>
                        )}
                      </div>
                      {/* <Link
                        className="d-flex justify-content-center card pb-3"
                        to="/"
                      > */}
                      <div className="d-flex justify-content-center card pb-3">
                        <Button
                          style={{ cursor: "pointer" }}
                          className="rounded "
                          type="btn px-5"
                          hasShadow
                          isPrimary
                        >
                          Register
                        </Button>
                      </div>
                      {/* </Link> */}
                      <p className="akun">
                        Sudah mempunyai akun ?{" "}
                        <span
                          onClick={handleForm}
                          style={{ cursor: "pointer" }}
                        >
                          Login
                          {/* <button className="link" component={Link} to="/register">Register</button> */}
                        </span>
                      </p>
                    </form>
                  </>
                ) : (
                  <>
                    <form onSubmit={handleLogin}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={emailReg}
                          onChange={(e) => {
                            setEmailReg(e.target.value);
                          }}
                        />
                        {errors.emailReg && (
                          <p style={{ color: "red" }}>{errors.emailReg}</p>
                        )}
                      </div>
                      <div className="form-group pb-4">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={passwordReg}
                          onChange={(e) => {
                            setPasswordReg(e.target.value);
                          }}
                          
                        />
                        {errors.passwordReg && (
                          <p style={{ color: "red" }}>{errors.passwordReg}</p>
                        )}
                      </div>
                      <div className="d-flex justify-content-center card pb-3">
                        <Button
                          style={{ cursor: "pointer" }}
                          className="rounded "
                          type="btn px-5"
                          hasShadow
                          isPrimary
                        >
                          Login
                        </Button>
                      </div>
                      <p className="akun">
                        Belum mempunyai akun ?{" "}
                        <span
                          onClick={handleForm}
                          style={{ cursor: "pointer" }}
                        >
                          register
                          {/* <button className="link" component={Link} to="/register">Register</button> */}
                        </span>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
