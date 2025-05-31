import Footer from "./Footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return(
        <div>
            <Navbar />
            <main className="flex-grow">
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;