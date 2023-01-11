import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1] // as 1st element is Bearer and 2nd element is token

        let decodeData = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodeData?.id 

        next() // next is nothing but just the function(in routes->Questions.js) which will be called upon validating the above lines 
    } catch (error) {
        console.log(error)
    }
}

export default auth;