import { Link } from "react-router-dom";
import FormContainer from "../components/Containers/FormContainer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const submitHandler = (e) => {};
  return (
    <>
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
            {error && <span className="form-error">{error}</span>}
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full px-3 py-3 btn default-btn">
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
