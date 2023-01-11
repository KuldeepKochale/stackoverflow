import Questions from '../models/Questions.js'
import mongoose from 'mongoose'

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const postQuestion = new Questions(postQuestionData);
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new question")        
    }
}
export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const deleteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...');
    }

    try {
        await Questions.findByIdAndRemove(_id);
        res.status(200).json({message:'successfully deleted...'})
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...');
    }

    try {
        const question = await Questions.findById(_id)
        const upIndex = question.upVote.findIndex((id) => id === String(userId)) // searching the element of id = userId in the upVote array 
        const downIndex = question.downVote.findIndex((id) => id === String(userId)) // searching the element of id = userId in the downVote array

        if (value === 'upVote') {
            if (downIndex !== -1) { // that means the current user with id = userId is present in the downVote array 
                question.downVote = question.downVote.filter((id) => id !== String(userId)); // if the userId is present in the downVote array, so on clicking the upVote we will remove that user from the downVote array
            }
            if (upIndex === -1) { // that means the user with id = userId is not present in the upVote array
                question.upVote.push(userId); // the simply push the current user's userId in upVote array
            } else { // that means the user is already present in the upVote array, so remove it from the upVote array on clicking the upVote button
                question.upVote = question.upVote.filter((id) => id !== String(userId));
            }
        }        
        if (value === 'downVote') {
            if (upIndex !== -1) { // that means the current user with id = userId is present in the upVote array 
                question.upVote = question.upVote.filter((id) => id !== String(userId)); // if the userId is present in the upVote array, so on clicking the downVote we will remove that user from the upVote array
            }
            if (downIndex === -1) { // that means the user with id = userId is not present in the downVote array
                question.downVote.push(userId); // the simply push the current user's userId in downVote array
            } else { // that means the user is already present in the downVote array, so remove it from the downVote array on clicking the downVote button
                question.downVote = question.downVote.filter((id) => id !== String(userId));
            }
        }    
        await Questions.findByIdAndUpdate(_id, question); // updating the question after clicking downVote/upVote
        res.status(200).json({message:'voted successfully...'})
    } catch (error) {
        res.status(404).json({ message: 'id not found' });
    }
}