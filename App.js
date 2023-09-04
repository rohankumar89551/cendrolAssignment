import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const AppLayout = ()=>{
    return (
         <>
         <Header/>
         <Body/>
         {/* <Footer/> */}
         
         </>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);