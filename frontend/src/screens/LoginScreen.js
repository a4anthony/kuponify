import { useEffect, useState } from "react";
import FormContainer from "../components/Containers/FormContainer";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Link } from "react-router-dom";
const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  useEffect(() => {
    if (user) {
      history.push(redirect);
    }
  }, [history, user, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <FormContainer title={"Login"}>
        <form onSubmit={submitHandler}>
          <div className="mb-7 relative">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <span className="form-error">{error}</span>}
          </div>
          <div className="mb-7">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <p className="text-sm text-right text-gray-600" id="result">
              <Link
                to="/forgot-password"
                className="text-red-500 hover:text-red-400"
              >
                Forgot Password?
              </Link>
            </p>
            <button type="submit" className="w-full px-3 py-3 btn default-btn">
              {loading ? (
                <span className="">{spinner}</span>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
          <p className="text-sm text-center text-gray-600" id="result">
            Not yet registered?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-400">
              Register
            </Link>
          </p>
        </form>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
