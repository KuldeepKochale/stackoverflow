import express from "express";
import { postAnswer,deleteAnswer } from '../controllers/Answers.js'
import auth from "../middlewares/auth.js";

const router = express.Router();

router.patch('/post/:id',auth, postAnswer); // patch is to update database as we are not creating a new field of answer, this field is already present in the database we are just updating it
router.patch('/delete/:id', auth, deleteAnswer);

export default router;
