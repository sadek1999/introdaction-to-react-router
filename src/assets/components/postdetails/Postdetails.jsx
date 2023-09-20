import {  useLoaderData, useNavigate } from "react-router-dom";


const Postdetails = () => {
    const postDetais=useLoaderData()
    const navigate=useNavigate()
    const {id,title,body}=postDetais;
    const GoBack=()=>{
       navigate(-1)
    }
    return (
        <div>
            <h1>{id}</h1>
            <h3>{title} </h3>
            <p>{body}</p>
            <button onClick={GoBack}>Go Back</button>
        </div>
    );
};

export default Postdetails;