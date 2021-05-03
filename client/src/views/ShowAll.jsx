import {useState,useEffect} from 'react';
import Axios from 'axios';
import ReactMapGL from 'react-map-gl';
import "../index.css"
import * as meetingData from "../data/meetingData.json";

const Main = props => {
    const [meetings,setMeetings] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/meetings")
            .then(res => setMeetings(res.data.results))
            .catch(err => console.log(err))
    },[])
    const options = {
        weekday:'long'
    }
    let [viewport,setViewport] = useState({
        latitude:35.2784,
        longitude:-93.1338,
        zoom:12,
        width:1000,
        height:500,
        pitch:50
    })

    return(
        <>
        <h1 className="justify-content-center">Find a Meeting</h1>
        <br /> <br />
        <div className="container">
            <ReactMapGL
                className="ml-5"
                mapStyle={'mapbox://styles/mapbox/dark-v9'}
                mapboxApiAccessToken={"pk.eyJ1IjoiY2dlb3IwNjMiLCJhIjoiY2ttejgwYmUzMGI2OTJ2bm4wajkxNGE2ZCJ9.RLF9D3pNai4xPM7dIxlRYA"}
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                {/* {meetingData.results.map((meeting)=>(
                    <Marker key={_id} >
                        <div>MEETING</div>
                    </Marker>
                ))} */}
            </ReactMapGL>
        </div>
        <br /> <br />
        {
        meetings ?
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Recovery Program: </th>
                        <th>Group Name: </th>
                        <th>Location: </th>
                        <th>Day: </th>
                        <th>Time: </th>
                        <th>Type: </th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                    {
                        meetings.map((j,i)=> {
                            return <tr key = {i}>
                                        <td>
                                            {j.program}
                                        </td>
                                        <td>
                                            {j.groupName}
                                        </td>
                                        <td>
                                            <p>
                                                {j.address.street}
                                                <br/>
                                                {j.address.city}, {j.address.state} {j.address.zip}
                                            </p>
                                        </td>
                                        <td>
                                            {new Date(j.date).toLocaleString("en-US",options)}
                                        </td>
                                        <td>
                                            {
                                                new Date(j.date).toLocaleTimeString()
                                            }
                                        </td>
                                        <td>
                                            {j.meetingType}
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>:
            <h2>Loading...</h2>
        }
        </>
    )
}

export default Main;