import React from "react";


import Header from "./header";
import Subheading from "./subheading";
import Mailfolder from "./folder";
import Maildisplay from "./display";
import Readmail from "./readmail";


function App() {
    return (
        <>
            {
                
            }
            <Header />
            <Subheading />


            <div className="flex2 conatiner">
                <div className="width20">
                    <Mailfolder />
                </div>
                <div className="width30">
                    <Maildisplay />
                </div>
                <div className="width50">
                    <Readmail />
                </div>


            </div>

        </>
    )
}

export default App