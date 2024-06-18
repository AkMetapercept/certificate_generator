const express = require("express");
const User = require("./model/userDetail");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://akshayrp:root@planb.ybnv3iv.mongodb.net/");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "success" });
                } else {
                    res.json({ status: "Invalid" });
                }
            } else {
                res.json({ status: "No Records" });
            }
        })
        .catch(err => {
            res.status(500).json({ status: "error", message: err.message });
        });
});

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(user => res.json({ status: "success", user }))
        .catch(err => res.status(500).json({ status: "error", message: err.message }));
});

app.listen(3001, () => {
    console.log("server started on port", 3001);
});
