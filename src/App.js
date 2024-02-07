import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    
<>

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
</BrowserRouter>
  </>
  );
}

export default App;
