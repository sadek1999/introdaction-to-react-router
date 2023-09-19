import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users =useLoaderData()
    return (
        <div>
            <h1>Our  Users :{users.length}</h1>
            <p>the good users reverio </p>
            {
              users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;