import {useState} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import MeetingForm from '../components/MeetingForm';

const Create = props => {
    const [meeting,setMeeting] = useState({
        program:"",
        groupName:"",
        date:"",
        address: {
            street:"",
            city:"",
            state:"",
            zip:""
        },
        childcare:false,
        meal:false,
        repName:"",
        repNumber:0,
        repEmail:"",
        website:"",
        meetingType:"",
        additionalInfo:""
    })
    const [errors, setErrors] = useState({
        name:""
    }) 
    const handleChange = e => {
        setMeeting({
            ...meeting,
            [e.target.name]: e.target.value
        })
    }
    const handleAddressChange = e => {
        setMeeting({
            ...meeting,
            address:{
                ...meeting.address,
                [e.target.name] : e.target.value
            }
        })
    }
    const handleCheckChange = e => {
        setMeeting({
            ...meeting,
            [e.target.name]: !meeting[e.target.name]
        })
    }
    const handleSubmit = e=>{
        e.preventDefault();

        Axios.post("http://localhost:8000/api/meetings",meeting)
            .then(res=> navigate('/findMeeting'))
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }
    return(
        <>
        <h4>addMeeting</h4>
        <MeetingForm 
            inputs = {meeting}
            title = "Add Your Meeting"
            submitValue = "Add Meeting"
            handleInputChange = {handleChange}
            handleAddressChange={handleAddressChange}
            handleSubmit={handleSubmit}
            errors={errors}
            handleCheckChange={handleCheckChange}
        />
        </>
    )
}

export default Create;