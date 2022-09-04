import React, { useState } from "react";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Secyion_2";
import "./Style.css";

function App() {

    // const [malumot, setMalumot] = useState("hello");
    // const handleFunc = () =>{
    //     setMalumot("salom")
    //     console.log(malumot);
    // }

    // const [malumot, setMalumot] = useState(true);
    // const [data, setData] = useState([
    //     {
    //         name
    //     }
    // ])

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



            {/* <button onClick={handleFunc} className={malumot ? "btn1" : "btn2"}>modal</button> */}


            {/* <div className={malumot ? "div1" : "div1 active"}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis beatae quae, vero distinctio sunt aspernatur, asperiores omnis debitis ea voluptates nulla eligendi labore nobis! Modi laudantium accusamus quisquam est.</p>
            </div> */}



            {/* <Nav malumot={data} malumot2={m} /> */}


        </>
    );
}

export default App;