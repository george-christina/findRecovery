import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import Axios from 'axios';
import dashboardPic from '../images/dashboardPic.png';
import aalogo from '../images/AA-logo-blue.png';
import crlogo from '../images/crlogo.png';
import nalogo from '../images/nalogo.png';

const Main = props => {
    const [meetings,setMeetings] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/meetings")
            .then(res => setMeetings(res.data.results))
            .catch(err => console.log(err))
    },[])

    return(
        <>
        <div class="container">
            <div className="d-flex align-items-center justify-content-center">
                <h4 class="text-warning">Your resource to find support locally!</h4>
            </div>
            <hr/>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <img id="mainPic" class="align-self-center shadow-sm p-3 mb-5 bg-body rounded"src={dashboardPic} alt="heartHands"/>
                </div>
                <div className="flex-grow-1 ms-3">
                    <p>Welcome to findRecovery! The thought behind findRecovery is to provide a comprehensive list of recovery meetings in your area. We want to help you find the right setting for you to seek recovery amongst others who are doing the same. Choosing the path to healing and truth is life altering, and we want to make the process a little easier by giving you the chance to go to multiple meetings a week if needed. Having a comprehensive list of these meetings ensures that you have the right information at your fingertips. Let us help you take the next best step.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <hr/>
            <p>We work with several recovery programs.</p>
            <div className="d-flex justify-content-center">
                <img src={aalogo} alt="alcoholics anonymous logo"/>
                <img src={crlogo} alt="celebrate recovery logo"/>
                <img src={nalogo} alt="narcotics anonymous logo"/>
            </div>
        </div>
        </>
    )
}

export default Main;