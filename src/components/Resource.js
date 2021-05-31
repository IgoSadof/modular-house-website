import React,{useState, useEffect } from "react";
import axios from "axios";

const Resource = () => {
    const [resources,setResources] = useState("none");
    console.log('it is resources')
    useEffect(() => {
        axios.get('/rest/resources').then(response=>{
            console.log(response)
        })
        axios.get('/rest/resourcestv').then(response=>{
            console.log(response)
        })
        // console.log(resources)
    },[]);

    return (

        <div className="myResource">
            <p>{resources}</p>
        </div>
    );
};
export default Resource;