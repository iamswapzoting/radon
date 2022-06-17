const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
    try {
        let data = req.body;
        let savedData = await userModel.create(data);
        res.status(201).send({ msg: savedData });
    }
    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};

// // TRY CATCH SUMMARY:
// // if you get an error in try block, it will not execute the next lines of code inside try
// // instead it will jump into catch block and execute the code there
// // code in catch block is normallly not executed
// //rather catch block is only executed if there is error in try block
// // the error( along with message++) gets sent to catch block incase there is an error

const loginUser = async function (req, res) {

    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(401).send({
                status: false,
                msg: "username or the password is not corerct",
            });

        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "radon",
                organisation: "FunctionUp",
            },
            "functionup-radon"
        );
        res.setHeader("x-auth-token", token);
        res.status(201).send({ status: true, token: token });
    }
    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};


const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        res.status(201).send({ status: true, data: userDetails });
    }
    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};

const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userData = req.body;
        console.log(userData)
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
        res.status(201).send({ status: "updated", data: updatedUser });
    }
    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};


const postMessage = async function (req, res) {
    try {
        let message = req.body.message

        let user = await userModel.findById(req.params.userId)

        let updatedPosts = user.posts
        updatedPosts.push(message)
        let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

        return res.status(201).send({ status: true, data: updatedUser })
    }
    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

const deleteUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true, upsert: true });
        res.status(201).send({ status: "updated", data: updatedUser });
    }
    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser