import { Router } from "express";
import { sendMail } from "../util/sendMailRouter.js";
const mailRouter = Router();

mailRouter.post("/mail", (req, res) => {
    sendMail(req.body)
    .then((mail) => {
        res.status(200).send({ data: mail });
    })
    .catch((err) => {
        res.status(404).send({ data: err });
    });
});

export default mailRouter;