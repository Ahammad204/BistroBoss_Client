import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const MainLayout = () => {

    const location = useLocation();

    const noheaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div>
           { noheaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noheaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;