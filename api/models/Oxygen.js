
const mongoose = require("mongoose");
const { timeStamp } = require("console");

const ExploreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a usercname"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
  },

  title: {
    type: String,
    required: [true, "Please add a title"],
    minlength: 10,
    // select: false,
  },
  phone_no: {
    type: String,
    required: [true, "Please add a title"],
    minlength: 10,
    // select: false,
  },
  lead_status: {
    type: String,
    // required: [true, "Please add a lead status"],
    // select: false,
    required : [false,"wow mam"]
  },
  profession_org: {
    type: String,
    required: [true, "Please add a profession or org"],

    // select: false,
  },
  address: {
    type: String,
    required: [true, "Please add a address"],
    // select: false,
  },
  availability: {
    type: String,
    // required: [true, "Please add availability/urgency status"],

  },
  instructions: {
    type: String,
    required: [true, "Please add some instructions/specifics"],

  },

  message: {
    type: String,
    required: [true, "Please add a message/information"],

  },
  verified :{
      type:String,
       required:false,
       default:"yet to verify"
  },
  category:{
type:String,
required:"true",
default:"leads",
  },

  // blood_plasma:"",
  // food_grocery:"",
  // emergency_drugs:"",
  // area_landmark:"",
  blood_plasma: {
    type: String,
  },
food_grocery: {
    type: String,
  },
 emergency_drugs: {
    type: String,
  },
  area_landmark: {
    type: String,
  },
  postUserID: {
    type: String,
    required:true
  },

  createdDate:{
      type:Date,
      required:"true",
      default:Date.now()
  }


},{ timestamps: true });
// name:"",
// title:"",
// email:"",
// phone_no:"",
// lead_status:"Available",
// profession_org:"",
// address:"",
// availability:"",
// instructions:"",
// message:"",
// createdDate:Date.now(),
// verified:"false",
// category:"leads"







const oxygen = mongoose.model("oxygen", ExploreSchema);
const blood_plasma = mongoose.model("blood_plasma",ExploreSchema)
const hospital_beds =mongoose.model("hospital_beds",ExploreSchema)
const crowdsource_campaigns =mongoose.model("crowdsource_campaigns",ExploreSchema)
const emergency_drugs =mongoose.model("emergency_drugs",ExploreSchema)
const doctor_support =mongoose.model("doctor_support",ExploreSchema)
const food_grocery =mongoose.model("food_grocery",ExploreSchema)


module.exports ={
  oxygen,
  blood_plasma,
  hospital_beds,
  crowdsource_campaigns,
  emergency_drugs,
  doctor_support,
  food_grocery,

}