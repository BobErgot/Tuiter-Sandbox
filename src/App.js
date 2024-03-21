import Tuiter from "./tuiter";
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";
import Notes from "./notes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/*" element={<Tuiter/>}/>
                        <Route path="/notes/*" element={<Notes/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

