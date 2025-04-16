import mongoose, {Schema} from "mongoose";


const serciceSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    awaitbility : {
        type : Boolean,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    image : {
        type: String,
    }
})

export default mongoose.model('Service', serciceSchema)