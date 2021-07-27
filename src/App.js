import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import CommentPage from "./pages/comment";
import Us from "./pages/us";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/comment" component={CommentPage} exact />
        <Route path="/us" component={Us} exact />
      </Switch>
    </Router>
  );
}

export default App;
