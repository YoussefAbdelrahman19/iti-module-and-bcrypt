var express = require("express");
var router = express.Router();
//to get instance of the user
const userModel = require("../models/users");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   console.log("req.params.id", req.param.id);

//   console.log(req.body);
//   next();
// });
router.get("/", async (req, res, next) => {
  try {
    const users = await userModel.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});

/* post users listing. */
// router.post("/", async function (req, res, next) {
//   try {
//     const userInstance = new userModel({
//       id: req.body.id,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       address: req.body.address,
//       age: req.body.age,
//       password: req.body.password,
//       dob: req.body.dob,
//     });
//     await userInstance.save((err, userDoc) => {
//       if (!err) return res.json("user which created ", userDoc);
//       else {
//         console.log("error happend");
//         res.send("error while creating user", err);
//       }
//     });
//     res.status(200).send({ message: "User created successfully" });
//     return; // add a return statement here
//   } catch (error) {
//     console.log("catched error ", error);
//     res.status(500).send({ message: "Error creating user" });
//     return; // add a return statement here
//   }
// });

//post new user
router.post("/", async function (req, res, next) {
  try {
    const userInstance = new userModel({
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      address: req.body.address,
      age: req.body.age,
      password: req.body.password,
      dob: req.body.dob,
    });
    await userInstance.save((err, userDoc) => {
      if (!err) {
        res.status(200).json({ massage: "user which created ", doc: userDoc });
        return; // add a return statement here
      } else {
        console.log("error happend");
        res
          .status(500)
          .send({ message: "Error creating user", nextError: err });
      }
    });
  } catch (error) {
    console.log("catched error ", error);
    res.status(500).send({ message: "Error creating user", nextError: error });
    next(error); // define the next parameter here

    return; // add a return statement here
  }
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource, users get");
});

module.exports = router;
