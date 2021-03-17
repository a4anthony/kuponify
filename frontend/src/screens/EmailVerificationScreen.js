import { useEffect } from "react";
import FormContainer from "../components/Containers/FormContainer";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../actions/userActions";
const spinner = <FontAwesomeIcon className={"fa-spin"} icon={faCircleNotch} />;

const EmailVerificationScreen = ({ location, history }) => {
  const token = new URLSearchParams(location.search).get("token");
  const email = new URLSearchParams(location.search).get("email");
  const dispatch = useDispatch();

  const userVerifyEmail = useSelector((state) => state.userVerifyEmail);
  const { verified, error } = userVerifyEmail;

  useEffect(() => {
    if (!email) {
      history.push("/");
    }
    if (!token) {
      history.push("/");
    }
    if (email && token) {
      dispatch(verifyEmail(email, token));
    }
    if (verified) {
      history.push("/");
    }
  }, [history, email, token, dispatch, verified]);

  return (
    <FormContainer>
      <div className="text-center">
        <h5 className="font-bold mb-2 text-dark">
          Verifying your email address
        </h5>
        {error ? (
          <span className="error-text">
            An error occcured. Please try again
          </span>
        ) : (
          <span>{spinner}</span>
        )}
      </div>
    </FormContainer>
  );
};

export default EmailVerificationScreen;
