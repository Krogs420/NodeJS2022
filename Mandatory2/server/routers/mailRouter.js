import { Router } from "express";
import { info } from "../util/sendMail.js";
const mailRouter = Router();

mailRouter.post("/mail", (req, res) => {
    info()
    .then((mail) => {
        res.status(200).send({ data: mail });
    })
    .catch((err) => {
        res.status(404).send({ data: err });
    });
});

export default mailRouter;