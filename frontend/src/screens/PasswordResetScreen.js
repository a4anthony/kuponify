import FormContainer from "../components/Containers/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { passwordReset } from "../actions/userActions";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
const eye = <FontAwesomeIcon icon={faEye} />;
const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;

const PasswordResetScreen = ({ location }) => {
  const token = new URLSearchParams(location.search).get("token");
  const email = new URLSearchParams(location.search).get("email");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [tokenError, setTokenError] = useState("");
  const dispatch = useDispatch();
  const passwordResetInfo = useSelector((state) => state.passwordReset);
  const { loading, error, status } = passwordResetInfo;

  useEffect(() => {
    if (!loading && error && error.password && error.password.message) {
      setPasswordError(error.password.message);
    } else {
      setPasswordError("");
    }
    if (!loading && error && error.token && error.token.message) {
      setTokenError(error.token.message);
    } else {
      setTokenError("");
    }
  }, [loading, error]);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(passwordReset(email, token, password));
  };

  return (
    <>
      <Meta title={"Password Reset - Kuponify"} />
      <FormContainer title={"Password Reset"}>
        <form onSubmit={submitHandler}>
          <div className="mb-7 relative">
            <label htmlFor="password" className="label hidden">
              Password
            </label>
            <input
              name="password"
              id="password"
              placeholder="Enter your new password"
              required
              value={password}
              type={passwordShown ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && (
              <i
                className="absolute right-3 top-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {eye}
              </i>
            )}
            {passwordError && (
              <span className="form-error top-10">{passwordError}</span>
            )}
            {tokenError && (
              <span className="form-error top-10">{tokenError}</span>
            )}
            {status && (
              <span className="form-success top-10">
                Password reset successful.{" "}
                <Link
                  className="text-blue-500 hover:text-blue-400"
                  to={"/login"}
                >
                  Login
                </Link>
              </span>
            )}
          </div>
          <div className="mt-8">
            <button type="submit" className="w-full px-3 py-3 btn default-btn">
              {loading ? (
                <span className="">{spinner}</span>
              ) : (
                <span>Reset Password</span>
              )}
            </button>
          </div>
        </form>
      </FormContainer>
    </>
  );
};

export default PasswordResetScreen;
