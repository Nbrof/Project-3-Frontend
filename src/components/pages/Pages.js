import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'

const Pages = (props) => {
  return (
    <div className='pages'>
      <main>
        <Switch>
          <Route
            exact
            path="/home"
            render={(rp) => (
              <Home 
                {...rp}
              />
            )}
          />
          <Route
            exact
            path="/menu"
            render={(rp) => (
              <Menu 
                {...rp}
              />
            )}
          />
          <Route
            exact
            path="/product"
            render={(rp) => (
              <Product 
                {...rp}
              />
            )}
          />
          <Route
            exact
            path="/productinfo"
            render={(rp) => (
              <ProductInfo 
                {...rp}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(rp) => (
              <Profile 
                {...rp}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={(rp) => (
              <About 
                {...rp}
              />
            )}
          />
          <Route
            exact
            path="/order"
            render={(rp) => (
              <Order 
                {...rp}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default Pages