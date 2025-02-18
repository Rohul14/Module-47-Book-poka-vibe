import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div>
            <section className='max-w-7xl mx-5 lg:mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;