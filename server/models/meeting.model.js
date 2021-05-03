const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
    program:{
        type: String,
        required:[true,"Recovery Program is required."],
    },
    groupName:{
        type: String,
        required:[true,"Group Name is required."]
    },
    date: {
        type: Date
    },
    address: {
        street:{
            type:String
        },
        city:{
            type:String
        },
        state:{
            type:String,
        },
        zip:{
            type:Number
        }
    },
    childcare:{
        type: Boolean
    },
    meal:{
        type: Boolean
    },
    repName:{
        type: String,
        required:[true,"Name of rep for program is required."],
        minlength:[3,"Name must be at least 3 characters."]
    },
    repNumber:{
        type: Number
    },
    repEmail:{
        type: String,
        required:[true,"Email is required."],
        minlength:[3,"Email must be at least 3 characters."]
    },
    website:{
        type:String
    },
    meetingType:{
        type:String,
    },
    additionalInfo:{
        type:String
    }
},{timestamps:true})

const Meeting = mongoose.model("Meeting",MeetingSchema);

module.exports = Meeting;