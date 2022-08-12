const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res)=>{
    let data = req.body;
    if(data.name.length===0 || data.email.length===0 || data.message.length===0){
        return res.json({msg: "Please fill all the fields"})
    }

    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'hasnasir24@gmail.com',
            pass: '' //generate an app password of your email and put here
        }
    })
    let mailOptions = {
        from: data.email,
        to: 'hasnasir24@gmail.com',
        subject: `message from ${data.name}`,
        html: `
        <h3>Information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>
        <h3><li>Message</h3>
        <p><li>${data.message}</li></p>
        
        `
    }
    smtpTransporter.sendMail(mailOptions,(error)=>{
        try {
            if(error) return res.status(400).json({msg: "Please Fill All the Fields"})
            res.status(200).json({msg: "Thank you for contacting Hassan! I will get back to you as soon as possible"})
        } catch (error) {
            if(error) return res.status(500).json({msg: "There is server error"})
        }
    })
})
module.exports = router
