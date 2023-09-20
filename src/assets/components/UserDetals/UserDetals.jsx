import { useLoaderData } from "react-router-dom";


const UserDetals = () => {
    const user =useLoaderData();
    const {name,phone,email}=user;
    return (
        <div>
            <h3>name of user = {name} </h3>
            <h4>{email}</h4>
            <h5>{phone}</h5>
        </div>
    );
};

export default UserDetals;
