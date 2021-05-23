import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Form from './Form';
import Display from "./Display"



function App() {

const url = "http://localhost:4000"

const [icecream, setIceCream] = React.useState([])

const emptyIceCream = {
  name: "",
  type: "",
  dairy: "",
  toppings: "",
  description: "",
  img: "",
  price: "",
  rating: ""
}

const [selectedIceCream, setSelectedIceCream] = React.useState (emptyIceCream)

const getIceCream = () => {
  fetch(url + "/icecream/")
  .then((response) => response.json())
  .then((data) => {
    setIceCream(data)
  })
}

React.useEffect(() => {
  getIceCream()
}, [])


const handleCreate = (newIceCream) => {
  fetch(url + "/icecream", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newIceCream)
  })
  .then(() => getIceCream(2))
}

const handleUpdate = (icecream) => {
  fetch(url + "/icecream/" + icecream._id, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(icecream)
  })
  .then(() => getIceCream())
}

const selectIceCream = (icecream) => {
  setSelectedIceCream(icecream)
}

const deleteIceCream = (icecream) => {
  fetch(url + "/icecream/" + icecream._id, {
    method: "DELETE"
  })
  .then(() => {
    getIceCream()
  })
}



  return (
    <div className="App">
     <h1 className="frizzy-logo" >FRIZZY</h1>

     <Link to="create">
       <button className="create">Add Ice Cream</button>
     </Link>

     <main>

       <Switch>
        
      <Route
      exact
      path="/"
      render={(rp) => (
        <Display { ...rp}
        icecream={icecream}
        selectIceCream={selectIceCream}
        deleteIceCream={deleteIceCream}
        />
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

       </Switch>
     </main>
    </div>
  );
}

export default App;
