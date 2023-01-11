import express from 'express'
import {AskQuestion, getAllQuestions, deleteQuestion,voteQuestion} from '../controllers/Questions.js'
import auth from '../middlewares/auth.js';

const router = express.Router()

router.post('/Ask', auth, AskQuestion) // auth is only required in asking a question as only registered user can ask the question
router.get('/get', getAllQuestions); // non registered user can see all the questions but cannot ask
router.delete('/delete/:id', auth, deleteQuestion);
router.patch('/vote/:id', auth, voteQuestion);
export default router