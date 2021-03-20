import { Link } from "react-router-dom";
import FormContainer from "../components/Containers/FormContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { passwordResetMail } from "../actions/userActions";
import Meta from "../components/Meta";

const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const passwordResetMailInfo = useSelector((state) => state.passwordResetMail);
  const { loading, error, status } = passwordResetMailInfo;
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (!loading && error && error.email && error.email.message) {
      setEmailError(error.email.message);
    } else {
      setEmailError("");
    }
  }, [error, loading]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(passwordResetMail(email));
  };
  return (
    <>
      <Meta title={"Forgot Password - Kuponify"} />
      <FormContainer title={"Password Reset"}>
        <form onSubmit={submitHandler}>
          <div className="mb-7 relative">
            <label htmlFor="email" className="label hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <span className="form-error top-10">{emailError}</span>
            )}
            {status && (
              <span className="form-success top-10">
                A password reset link has been sent to your email address.
              </span>
            )}
          </div>
          <div className="mb-4 mt-8">
            <button
              type="submit"
              className="w-full px-3 py-3 btn default-btn"
              disabled={status}
            >
              {loading ? (
                <span className="">{spinner}</span>
              ) : (
                <span>Send Password Reset Link</span>
              )}
            </button>
          </div>
          <p className="text-sm text-center text-gray-600" id="result">
            Remembered your password?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-400">
              Login
            </Link>
          </p>
        </form>
      </FormContainer>
    </>
  );
};

export default ForgotPasswordScreen;
