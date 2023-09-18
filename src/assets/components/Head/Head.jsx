import { Outlet } from "react-router-dom";


const Head = () => {
    return (
        <div>
           <h1>nav bar</h1>
            
             <nav>
             <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </nav>
            <Outlet></Outlet>  
            
        </div>
    );
};

export default Head;