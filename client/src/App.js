import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import Carousal from "./components/Carousal";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Browsepage from "./pages/Browsepage";
import TributePage from "./pages/TributePage";


// const App = () => (
//   <Router>
//     <div>
//       {/* <Dashboard/> */}
//       <Homepage/>
//       <Switch>
//         {/* <Route exact path="/" component={Homepage} />
//         <Route exact path="/loggedin" component={Dashboard} />
//    */}
//       </Switch>
//     </div>
//   </Router>
// );

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/browse" component={Browsepage} />
        <Route exact path="/tribute" component={TributePage} />

        </Switch>
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
