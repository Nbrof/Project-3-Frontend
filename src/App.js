import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import Display from "./Display";
import Signup from "./forms/Signup";
import Login from "./forms/Login";
import Footer from "./components/Footer";

import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import More from "./components/pages/More";
import Offer from "./components/pages/Offer";
import Order from "./components/pages/Order";
import Product from "./components/pages/Product";
import ProductInfo from "./components/pages/ProductInfo";
import Profile from "./components/pages/Profile";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

function App() {
  const url = "http://localhost:4000";

  const [iceCreams, setIceCreams] = React.useState([]);
  const [iceCreamsArr, setIceCreamsArr] = React.useState([])
  const [iceCream, setIceCream] = React.useState({})

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
  };

  const emptySignup = {
    name: "",
    pass: "",
    email: "",
    address: "",
  };

  const [selectedIceCream, setSelectedIceCream] = React.useState(emptyIceCream);
  const [selectedLogin, setSelectedLogin] = React.useState(emptyLogin);
  const [selectedSignup, setSelectedSignup] = React.useState(emptySignup);

  const getIceCream = () => {
    fetch(url + "/icecream/")
      .then((response) => response.json())
      .then((data) => {
        setIceCreams(data);
        setIceCreamsArr(data);
      });
  };

  React.useEffect(() => {
    getIceCream();
  }, []);

  const handleFilter = (arr, filter) => {
    if (filter === "all") {
      setIceCreams(iceCreamsArr)
    } else if (filter === "ice cream") {
      const iceCreamsFilter = arr.filter((item) => item.type.toLowerCase() !== "float")
      setIceCreams(iceCreamsFilter)
    } else {
      const iceCreamsFilter = arr.filter((item) => item.type.toLowerCase() === filter)
      setIceCreams(iceCreamsFilter)
    }
  }

  const handleClick = (item) => {
    setIceCream(item)
  }

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
      {/* <img src='https://res.cloudinary.com/dejg3dz16/image/upload/v1621912001/Screen_Shot_2021-05-24_at_9.59.14_PM_ta2eju.png' alt='frizz background' /> */}

      {/* <h1 className="frizzy-logo">FRIZZY</h1> */}

      {/* <Link to="create">
        <button className="create">Add Ice Cream</button>
      </Link> */}

      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <div>
                <Link to="signup">
                  <button className="btns">Sign Up</button>
                </Link>
                <Link to="login">
                  <button className="btns">Log In</button>
                </Link>
              </div>
              // <Display
              //   {...rp}
              //   icecreams={icecreams}
              //   selectIceCream={selectIceCream}
              //   deleteIceCream={deleteIceCream}
              // />
            )}
          />
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
            path="/signup"
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
            path="/login"
            render={(rp) => (
              <Login
                {...rp}
                label="login"
                login={emptyLogin}
                handleSubmit={handleUpdate}
              />
            )}
          />
          <Route 
            exact 
            path="/home" 
            render={(rp) => (
              <div>
                <Home {...rp} />
                <Footer/>
              </div>
              )} />
          <Route 
            exact 
            path="/menu" 
            render={(rp) => (
              <div>
                <Menu 
                  {...rp} 
                  iceCreams={iceCreamsArr}
                  handleFilter={handleFilter}
                />
                <Footer />
              </div>
            )} />
          <Route 
            exact 
            path="/products" 
            render={(rp) => (
              <div>
                <Product 
                  {...rp} 
                  iceCreams={iceCreams}
                  handleClick={handleClick}
                />
                <Footer />
              </div>
            )} />
          <Route
            exact
            path="/products/:product"
            render={(rp) => (
              <div>
                <ProductInfo {...rp} />
                <Footer />
              </div>
            )} />
          <Route 
            exact 
            path="/offer" 
            render={(rp) => (
              <div>
                <Offer {...rp} />
                <Footer />
              </div>
            )} />
          <Route 
            exact 
            path="/more" 
            render={(rp) => (
              <div>
                <More {...rp} />
                <Footer />
              </div>
            )} />
          <Route 
            exact 
            path="/profile" 
            render={(rp) => (
              <div>
                <Profile {...rp} />
                <Footer />
              </div>
            )} />
          <Route 
            exact 
            path="/about" 
            render={(rp) => (
              <div>
                <About {...rp} />
                <Footer />
              </div>
            )} />
          <Route 
            exact 
            path="/order" 
            render={(rp) => (
              <div>
                <Order {...rp} />
                <Footer />
              </div>
            )} />
        </Switch>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
