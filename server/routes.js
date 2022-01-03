// const upload = require('./middleware/upload');
const express = require('express');
const router = express.Router();
const { check, validationResult, matchedData } = require('express-validator');
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });

const formModel = require('./models/Form')
const Blog = require('./models/Blog')


router.post('/contact',  (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const email = req.body.email;
  //    requesting form data to DB 
  const formData = new formModel ({
        name,
        message,
        email
      });
      formData.save()

  const data = matchedData(req);
  console.log('Sanitized:', data);

    req.flash('success', "Thanks for the message! We'll be in touch :)");
    // res.redirect('/');
  });

  router.get('/blog', (req, res, next) => {
    Blog.find().then(result=>{
      res.status(200).json(
        result
      )
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
  })

  router.get('/blog/:iid', (req, res, next) => {
    // console.log(req.params.iid)
    Blog.findOne({iid: req.params.iid}).then(result=>{
      res.status(200).json(
       result
        )
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
  })


//   router.get('/article/:id',async (req,res) => {
//     try {
//         const article = await Blog.findByOne({iid:req.params.iid})
//         if (!article)
//            return  res.status(404).send()
//         res.status(200).send(article)
//     }catch(e){
//         res.status(400).send()
//     }
// })
  

// router.get('/article', (req, res) => {
//   Blog.find().then(result=>{
//     res.status(200).json({
//       data : result
//     })
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error:err
//     })
//   })
// })

  // router.post('/contact', csrfProtection, [
  //   check('name')
  //     .isLength({min:3})
  //     .withMessage('Name is required')
  //     .trim(),
  //   check('message')                                 //VALIDATIONS
  //     .isLength({ min: 1 })
  //     .withMessage('Message is required')
  //     .trim(),
  //   check('email') 
  //     .isEmail()
  //     .withMessage("That email doesn't look right")
  //     .bail()
  //     .trim()
  //     .normalizeEmail()
  // ], (req, res) => {
  //   // requesting form data to DB 
  //   const formData = new formModel ({
  //     name: req.body.name,
  //     message: req.body.message,
  //     email: req.body.email
  //   });
  //   formData.save()

  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //       return res.render('contact', {
  //           data: req.body,
  //           errors: errors.mapped(),
  //           csrfToken: req.csrfToken()
  //         });
  //   }
    
  
  //   const data = matchedData(req);
  //   console.log('Sanitized:', data);

  //   req.flash('success', "Thanks for the message! I'll be in touch :)");
    // res.redirect('/');
  // });


//  UPLOAD ROUTE
// router.post("/upload", upload.single("file"), (req,res) => {
//   if (req.file === undefined) return res.send("you must select")
//   const imgUrl = `http://localhost:3000/public/${req.file.filename}`;
//   return res.send(imgUrl)
// })

module.exports = router;