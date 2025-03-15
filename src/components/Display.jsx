import "../components/Display.css"
import React, { useState } from 'react';
import Survey from "./survey";

const Display = ({ fromMarker, toMarker, removeToMarker, removeFromMarker}) => {

    const [isDisplayVisible, setDisplayVisible] = useState(true);
    const [isSurveyVisible, setSurveyVisible] = useState(false);
    const [fromDisplay, setFormDisplay] = useState(null);
    const [toDisplay, setToDisplay] = useState(null);
    const [isSimVisible, setSimVisible] = useState(true);
    
    const handleRemoveFromMarker = () =>{
        removeFromMarker();
    }

    const handleRemoveToMarker = () =>{
        removeToMarker();
    }

    const toggleNavbar = () => {
        setDisplayVisible(!isDisplayVisible);
    }

    const toggleSurvey = () => {

        setSimVisible(false);
        setSurveyVisible(true);
    }

    const toggleSimulation = () => {
        setSurveyVisible(false);
        setSimVisible(true)
    }
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleSurvey} className="survey-btn blue-color-logo" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 432c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L96 448c-8.8 0-16-7.2-16-16z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className={isDisplayVisible ? 'popup-btn' : 'popup-offscreen'} onClick={toggleNavbar} viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z" /></svg>
            <div className={isDisplayVisible ? 'display-c' : 'display-offscreen'}>
                <div className={isSimVisible ? 'sim-show' : 'sim-hide'}>
                    <div className="select-c">
                        <h4>Origin</h4>
                        <select className="select-input">
                            <option value='' disabled selected>Select Origin</option>
                            <option value=''>MUIC Building</option>
                            <option value=''>Engineering Building</option>
                        </select>
                        <img src={fromMarker ? fromMarker.imageBuilding : null} className="img-org"></img>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick = {handleRemoveFromMarker} className = {fromMarker? 'cancel-loca' : 'cancel-hide'} viewBox="0 0 512 512"><path  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                    </div>
                    <div className="select-c">
                        <h4>Destination</h4>
                        <select className="select-input">
                            <option value='' disabled selected>Select Destination</option>
                            <option value=''>Faculty of engineering</option>
                        </select>
                        <img src= {toMarker ? toMarker.imageBuilding : null }className="img-org"></img>
                        <svg xmlns="http://www.w3.org/2000/svg"onClick = {handleRemoveToMarker} className = {toMarker? 'cancel-loca' : 'cancel-hide'} viewBox="0 0 512 512"><path  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                    </div>
                    <div className="select-info-c">
                        <h1>Heading from {fromMarker? fromMarker.title : "..."} to {toMarker? toMarker.title : "..."}</h1>
                        <h2>Simulation</h2>
                        <span>info</span>
                        <div className="info-c">
                            <div className="info-row">
                                <div className="info-data">
                                    <h2>Estimated Time:</h2>
                                    <h2>6 Minutes</h2>
                                </div>
                                <div className="info-data">
                                    <h2>Distance:</h2>
                                    <h2>0.7 KM</h2>
                                </div>
                                <div className="info-data">
                                    <h2>Arrival Time:</h2>
                                    <h2>18.36</h2>
                                </div>
                                <div className="info-data">
                                    <h2>Tramstop :</h2>
                                    <h2>63 m</h2>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-data">
                                    <h2>Estimated  Time:</h2>
                                    <h2>9 Minutes</h2>
                                </div>
                                <div className="info-data">
                                    <h2>Distance:</h2>
                                    <h2>1.2 KM</h2>
                                </div>
                                <div className="info-data">
                                    <h2>Arrival Time:</h2>
                                    <h2>18.50</h2>
                                </div>
                                <div className="info-data">
                                    <h2>Tramstop :</h2>
                                    <h2>50 m</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isSurveyVisible ? 'survey-show' : 'survey-hide'}>
                <svg xmlns="http://www.w3.org/2000/svg" onClick = {toggleSimulation} className = "survey-back" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    <Survey />
                </div>
            </div>
        </div>
    )
}

export default Display