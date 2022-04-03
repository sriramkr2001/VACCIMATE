const explore_models = require("../models/Oxygen");

const ErrorResponse = require("../utils/errorResponse");

let mongoose=require("mongoose")
exports.oxygen_get = async (req, res, next) => {
console.log("wowzo !")
const lead_type=req.params.lead_type;
const category = req.query.category;
const postid = req.params.postid;
console.log(category,postid,lead_type,"haider")
try {
  let posts;
  const required_model=mongoose.model(lead_type)
console.log(required_model)

  if (category) {
    posts = await required_model.find({ category });
    res.status(200).json(posts);
  }
  else if (postid) {
    let post = await required_model.find({ _id:postid });
  
     if(req.user)
     {
         console.log(req.user,"i am a disco dancer")
        //  post.currUser=req.user._id
        //  console.log(post.curruser)
     }
       

 
    res.status(200).json({post,currUser:req.user._id});
}
  else {
    posts = await required_model.find();
    res.status(200).json(posts);
  }
 
} catch (err) {
  res.status(500).json(err);
  // next(err)
}
next()

}




exports.oxygen_post = async (req, res, next) => {
    // console.log("wow")

    // const { username, email, password } = req.body;
// console.log(req.body)
const lead_type=req.params.lead_type;
console.log(lead_type)
const required_model_post=mongoose.model(lead_type)

try {
  const postzy = await required_model_post.create(
      req.body
  );

  res.status(200).json({ sucess: true });
} catch (err) {
  next(err);
}

    
    }

   