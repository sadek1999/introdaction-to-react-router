import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name , email}=user;

    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <Link to={`/user/${id}`}>show details</Link>
            
        </div>
    );
};

export default User;