const mongoose = require('mongoose')


const programSchema = new mongoose.Schema({
    lan: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required:true
    },
    user_id: {
        type: String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now

    }
  
   
})
// programSchema.method.inputCode =async function(input,lan){
//     try{
//         this.program=this.program
//     }
// }
const Program = mongoose.model('PROGRAM',programSchema);
module.exports = Program;