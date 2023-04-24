const apiKey = (req, res, next) => {
  const key = req.headers["key"];
  if (key === "123") {
    next();
  } else {
    //Boom.unauthorized("invalid key");
    res.json({"faild": "invalid key"});
  }
};

module.exports = { apiKey };
