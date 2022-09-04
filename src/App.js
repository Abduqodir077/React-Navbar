import React, { useState } from "react";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Secyion_2";
import "./Style.css";

function App() {

    const [malumot, setMalumot] = useState(true);
    const handleFunc = () => {
        setMalumot(!malumot)
        console.log(malumot);
    }

    return (
        <>


            <nav>
                <div className="logo">
                    <a>logo</a>
                </div>
                <div className={malumot ? "yopiq" : "ochiq"}>
                    <a href="#">Home</a>
                    <a href="#">Info</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                    <span id="s" onClick={() => setMalumot(!malumot)}>x</span>
                </div>
                <div className="btn_1">
                    <button onClick={handleFunc}>Modal</button>
                </div>
            </nav>

            <Section_1/>
            <Section_2/>


        </>
    );
}

export default App;