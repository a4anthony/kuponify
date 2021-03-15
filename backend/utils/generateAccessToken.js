import jwt from "jsonwebtoken";

const generateAccessToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "365d",
  });
};

export default generateAccessToken;
