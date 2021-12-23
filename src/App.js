import Geometry from './component/Geometry'
import Home from './Home';
import Tables from './component/Tables';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SimpleCalculator from './component/SimpleCalculator';

// import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
      {/* <Nav/> */}
      <Routes>
       <Route exact path='/' element={< Home />}></Route>
       <Route exact path='/tables' element={<Tables/>}></Route>
       <Route exact path='/geometry' element={<Geometry/>}></Route>
       <Route exact path='/simplecalculator' element={<SimpleCalculator/>}></Route>
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
