import { Link } from "react-router-dom";


const Head = () => {
    return (
        <div>
           <h1>nav bar</h1>
            
             <nav>
                <Link to={'/'}>Home</Link>
             <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                
            </nav>
           
            
        </div>
    );
};

export default Head;