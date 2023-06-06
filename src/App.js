import React from "react";
import Navbar from "../src/components/Navbar";
import Main from "../src/components/Main";
import data from "../src/data";

function App() {

    const sections = data.map(item => {
        return(
            <Main 
                item={item}
            />
        )
    })

    return(
        <div>
            <Navbar />
            <main className="main-section">
            {sections}
            </main>
        </div>
    )
}

export default App