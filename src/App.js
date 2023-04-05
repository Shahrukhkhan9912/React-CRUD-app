import "./App.css";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <h1 className="main-header">React Crud Operations</h1>
      <Router>
        <Routes>
          <Route exact path="/create" Component={Create} />
        </Routes>
        <Routes>
          <Route exact path="/read" Component={Read} />
        </Routes>
        <Routes>
          <Route exact path="/update" Component={Update} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
