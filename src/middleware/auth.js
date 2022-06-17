const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = function (req, res, next) {
  try {
    //let token = req.headers["x-Auth-token"];
     token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-radon", function (err, data) {
      if (err) {
        return res.status(401).send({ status: false, msg: "token is invalid" });
      } else {
        next()
      }
    })
  }
  catch (error) {
    console.log("This is the error :", error.message)
    res.status(500).send({ msg: "Error", error: error.message })
  }
}



const authorise = async function (req, res, next) {
  try {
   
    token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, 'functionup-radon')
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified.length !=24) return res.send({ status: false, msg: "invalid User Id" })
    else {let userDetails = await userModel.findById(userToBeModified);
    if (!userDetails) return res.status(400).send({ status: false, msg: "No such user exists" });
    }

    if (userToBeModified != userLoggedIn) return res.status(401).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    next()
  }
  catch (error) {
    console.log("This is the error :", error.message)
    res.status(500).send({ msg: "Error", error: error.message })
  }
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise 