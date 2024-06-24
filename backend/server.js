const express = require("express");
const User = require("./model/userDetail");
const certificate = require("./model/certificateDetails");
const Db=require("./db")
const cors = require("cors");
const dotenv=require("dotenv")
const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

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

app.post('/addCertificateData', (req, res) => {
    certificate.create(req.body)
        .then(user => res.json({ status: "success", user }))
        .catch(err => res.status(500).json({ status: "error", message: err.message }));
});
app.get('/getCertificateData', (req, res) => {
    certificate.find()
        .then(user => res.json({ status: "success", user }))
        .catch(err => res.status(500).json({ status: "error", message: err.message }));
});
const port=process.env.PORT ||3000

app.listen(port, () => {
    console.log("server started on port",port);
});

Db();
