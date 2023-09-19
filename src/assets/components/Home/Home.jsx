import { Outlet } from "react-router-dom";
import Head from "../Head/Head";
import Footer from "../footer/footer";



const Home = () => {
    return (
        <div>
            <Head></Head>
           
            <Outlet></Outlet>
            <Footer></Footer>
            
           
        </div>
    );
};

export default Home;