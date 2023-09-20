import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Posts = (item) => {
    const {title,id}=item.item
    const navigate=useNavigate()
   const handleDetatils=()=>{
    navigate(`/post/${id}`);
   }
    return (
        <div>
            <h4>{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show details</Link>
            <button onClick={handleDetatils}>Show details</button>
        </div>
    );
};

export default Posts;