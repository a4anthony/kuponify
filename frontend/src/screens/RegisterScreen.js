import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../actions/userActions";
import FormContainer from "../components/Containers/FormContainer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Meta from "../components/Meta";
const eye = <FontAwesomeIcon icon={faEye} />;

const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (!loading && error && error.name && error.name.message) {
      setNameError(error.name.message);
    } else {
      setNameError("");
    }
    if (!loading && error && error.email && error.email.message) {
      setEmailError(error.email.message);
    } else {
      setEmailError("");
    }
    if (!loading && error && error.password && error.password.message) {
      setPasswordError(error.password.message);
    } else {
      setPasswordError("");
    }
  }, [history, user, redirect, error, loading]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <Meta title={"Register - Kuponify"} />
      <FormContainer title={"Register"}>
        <form onSubmit={submitHandler}>
          <div className="mb-7 relative">
            <label htmlFor="name" className="label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="john Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="form-error">{nameError}</span>}
          </div>
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
            {emailError && <span className="form-error">{emailError}</span>}
          </div>
          <div className="mb-7 relative">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              type={passwordShown ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && (
              <i
                className="absolute right-3 top-8 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {eye}
              </i>
            )}
            {passwordError && (
              <span className="form-error">{passwordError}</span>
            )}
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full px-3 py-3 btn default-btn">
              {loading ? (
                <span className="">{spinner}</span>
              ) : (
                <span>Register</span>
              )}
            </button>
          </div>
          <p className="text-sm text-center text-gray-600" id="result">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-400">
              Login
            </Link>
          </p>
        </form>
      </FormContainer>
    </>
  );
};
export default RegisterScreen;
