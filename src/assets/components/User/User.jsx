

const User = ({user}) => {
    const {id, name , email}=user;

    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            
        </div>
    );
};

export default User;