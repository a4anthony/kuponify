import jwt from "jsonwebtoken";

const verifyToken = (token) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
      // console.log(err.message);
      return err.message;
      // res.send(err.message);
    } else {
      // console.log(verifiedJwt);
      return verifiedJwt;
      // res.send(verifiedJwt);
    }
  });
};

export default verifyToken;
