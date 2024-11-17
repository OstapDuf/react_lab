// layout.js

import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer.js";
import { Header } from "../header/header.js";

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="container my-4">
                <Outlet /> 
            </main>
            <Footer />
        </>
    );
};

export default Layout;
