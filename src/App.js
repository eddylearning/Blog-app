import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Create from './components/create';
import BlogDetails from './components/Blogdetails';
import Notfound from './components/Notfound';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/Blog-details/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
