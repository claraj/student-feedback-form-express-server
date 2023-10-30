const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Feedback app', author: 'Clara'})
})

router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next){
    // get the form data from the URL query 
    const formData = req.body
    
    // TODO - save this data to a database so someone can read and respond 

    res.render('thank_you', { 
        name: formData.name, 
        email: formData.email, 
        message: formData.comments,
        currentStudent: formData['current-student']
     })

})

module.exports = router


