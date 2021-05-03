import React from 'react';
import {useState} from 'react';


const MeetingForm = props=> {
    const {inputs,handleInputChange,handleSubmit,submitValue,errors,handleAddressChange,handleCheckChange}=props;


    return(
        <div>
                <form className=" col-6 mx-auto" onSubmit={handleSubmit}>
                    <div class="row">
                        <div className="col">
                            <label htmlFor="program">Recovery Program:</label>
                            <select name = "program" value={inputs.program} onChange={handleInputChange} class="form-control">
                                <option value="Celebrate Recovery">Celebrate Recovery</option>
                                <option value="Alcoholics Anonymous">Alcoholics Anonymous</option>
                                <option value="Narcotics Anonymous">Narcotics Anonymous</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="address">Street Address:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="street"
                                onChange={handleAddressChange}
                                value={inputs.address.street}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="groupName">Group Name:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="groupName"
                                onChange={handleInputChange}
                                value={inputs.groupName}
                            />
                            <span className="text-danger">
                                {errors.groupName ? errors.groupName.message:""}
                            </span>
                        </div>
                    
                        <div className="col">
                            <label htmlFor="city">City:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="city"
                                onChange={handleAddressChange}
                                value={inputs.address.city}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="date">Group Meeting Day:</label>
                            <input 
                                type="datetime-local" 
                                className="form-control"
                                name="date"
                                onChange={handleInputChange}
                                value={inputs.date}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="state">State:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="state"
                                onChange={handleAddressChange}
                                value={inputs.address.state}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>
                                <label htmlFor="childcare">Childcare Provided:</label>
                                <input 
                                    type="checkbox" 
                                    className="form-control"
                                    checked={inputs.childcare}
                                    onChange={handleCheckChange}
                                    name="childcare"
                                    value={inputs.childcare}
                                    readOnly
                                />
                            </div>
                            <div>
                                <label htmlFor="meal">Meal Provided:</label>
                                <input 
                                    type="checkbox" 
                                    className="form-control"
                                    checked={inputs.meal}
                                    onChange={handleCheckChange}
                                    name="meal"
                                    value={inputs.meal}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="zip">Zip Code:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="zip"
                                onChange={handleAddressChange}
                                value={inputs.address.zip}
                            />
                        </div>
                    </div>
                    <br /><br />
                    <p>Contact Info for Meeting Representative</p>
                    <div className="row">
                        <div className="col">
                                <label htmlFor="repName">Main Rep Name:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="repName"
                                    onChange={handleInputChange}
                                    value={inputs.repName}
                                    />
                        </div>
                        <div className="col">
                                <label htmlFor="repNumber">Phone Number:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="repNumber"
                                    onChange={handleInputChange}
                                    value={inputs.repNumber}
                                    />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                                <label htmlFor="repEmail">Email:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="repEmail"
                                    onChange={handleInputChange}
                                    value={inputs.repEmail}
                                    />
                        </div>
                        <div className="col">
                                <label htmlFor="website">Website:</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="website"
                                    onChange={handleInputChange}
                                    value={inputs.website}
                                    />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                                <label htmlFor="additionalInfo">Additional Info:</label>
                                <textarea 
                                    type="text" 
                                    className="form-control"
                                    name="additionalInfo"
                                    onChange={handleInputChange}
                                    value={inputs.additionalInfo}
                                    cols="45"
                                    rows="5"
                                />
                        </div>
                    </div>
                
                    <div class="mt-5">
                        <input type="submit" value={submitValue} className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        
    )
}
export default MeetingForm;