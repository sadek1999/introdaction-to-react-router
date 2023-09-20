

import {  useLoaderData } from "react-router-dom";
import Posts from "../posts/posts";



const Post = () => {
    const post=useLoaderData()
    return (
        <div>
            <h3>this is post page : {post.length}</h3>
            {
                post.map(item=><Posts key={item.id} item={item}></Posts>)
            }
        </div>
    );
};

export default Post;