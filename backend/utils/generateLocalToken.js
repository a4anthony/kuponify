const rand = function (userId) {
  return Math.random().toString(36).substr(2); // remove `0.`
};

const token = function (userId) {
  return rand() + userId + rand(); // to make it longer
};

export default token;
