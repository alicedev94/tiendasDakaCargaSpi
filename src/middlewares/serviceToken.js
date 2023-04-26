var jwt = require("jsonwebtoken");

function singToken(payload, secret) {
  var token = jwt.sign(payload, secret);
  return token;
}

function verifyToken(payload, secret) {
  var token = jwt.verify(payload, secret);
  return token;
}

module.exports = { singToken, verifyToken, jwt }