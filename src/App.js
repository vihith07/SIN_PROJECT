import Form from "./Components/Form";
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/" element={<Form />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
