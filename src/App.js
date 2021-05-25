import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import Display from "./Display";
import Signup from "./forms/Signup"
import Login from "./forms/Login"
import Footer from "./components/Footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

function App() {
  const url = "http://localhost:4000";

  const [icecreams, setIceCreams] = React.useState([]);

  const emptyIceCream = {
    name: "",
    type: "",
    dairy: "",
    toppings: "",
    description: "",
    img: "",
    price: "",
    rating: "",
  };

  const emptyLogin = {
    email: "",
    pass: "",
  }

  const emptySignup = {
    name: "",
    pass: "",
    email: "",
    address: "",
  }

  const [selectedIceCream, setSelectedIceCream] = React.useState(emptyIceCream);
  const [selectedLogin, setSelectedLogin] = React.useState(emptyLogin);
  const [selectedSignup, setSelectedSignup] = React.useState(emptySignup);

  const getIceCream = () => {
    fetch(url + "/icecream/")
      .then((response) => response.json())
      .then((data) => {
        setIceCreams(data);
      });
  };



  React.useEffect(() => {
    getIceCream();
  }, []);

  const handleCreate = (newIceCream) => {
    fetch(url + "/icecream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIceCream),
    }).then(() => getIceCream(2));
  };



  const handleUpdate = (icecream) => {
    fetch(url + "/icecream/" + icecream._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(icecream),
    }).then(() => getIceCream());
  };

  const selectIceCream = (icecream) => {
    setSelectedIceCream(icecream);
  };

  const selectLogin = (login) => {
    setSelectedLogin(login);
  };

  const selectSignup = (signup) => {
    setSelectedSignup(signup);
  };

  const deleteIceCream = (icecream) => {
    fetch(url + "/icecream/" + icecream._id, {
      method: "DELETE",
    }).then(() => {
      getIceCream();
    });
  };

  return (
    <div className="App">
      <h1 className="frizzy-logo">FRIZZY</h1>

      <Link to="create">
        <button className="create">Add Ice Cream</button>
      </Link>

      <main>
        <Switch>
          {/* <Route
            exact
            path="/"
            render={(rp) => (
              <Display
                {...rp}
                icecreams={icecreams}
                selectIceCream={selectIceCream}
                deleteIceCream={deleteIceCream}
              />
            )}
          /> */}

          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                icecream={emptyIceCream}
                handleSubmit={handleCreate}
              />
            )}
          />

          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form
                {...rp}
                label="update"
                icecream={selectedIceCream}
                handleSubmit={handleUpdate}
              />
            )}
          />


            <Route 
              exact
              path="/"
              render={(rp) => (
                <Signup 
                  {...rp}
                  label="signup"
                  signup={emptySignup}
                  handleSubmit={handleCreate}

                />
              )}
            />


            <Route 
              exact
              path="/home"
              render={(rp) => (
                <Login 
                  {...rp}
                  label="login"
                  login={emptyLogin}
                  handleSubmit={handleUpdate}
                  
                />
              )}
            />





        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
