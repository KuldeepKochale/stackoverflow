import express from "express";
import { login, signup } from "../controllers/auth.js";
import {getAllUsers,updateProfile} from '../controllers/users.js'
import auth from '../middlewares/auth.js'

const router = express.Router();

// router.post('/signup',() => {})
// router.post('/login',() => {})
router.post('/signup',signup)  // here signup is used as a callback function
router.post('/login', login)  // here login is used as a callback function

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id',auth,updateProfile)

export default router;