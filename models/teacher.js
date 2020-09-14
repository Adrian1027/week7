let mongoose= require('mongoose');
let teacherSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName:{type:String,
    validate:{validator:function(newNam){
        this.return(newNam.length >3);
    },message:'Invalid name'
        }
    },
    school:{type:String,
        required:true},
    students:[{
        type:mongoose.mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }]
});

module.exports=mongoose.model('Teacher',teacherSchema);