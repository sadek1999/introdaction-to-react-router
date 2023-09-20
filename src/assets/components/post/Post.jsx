
import { key } from "localforage";
import { useLoaderData } from "react-router-dom";


const Post = () => {
    const post=useLoaderData()
    return (
        <div>
            <h3>this is post page : {post.length}</h3>
            {
                post.map(item=>
                    
                    <h2 key={item.id}>{item.title}</h2>)
            }
        </div>
    );
};

export default Post;