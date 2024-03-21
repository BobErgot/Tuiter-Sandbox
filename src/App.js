import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Notes from "./notes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/*" element={<Notes/>}/>
                        <Route path="/tuiter/*" element={<Tuiter/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

