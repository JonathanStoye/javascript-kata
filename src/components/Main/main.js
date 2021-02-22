import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom"
import axios from 'axios'

import { Books } from '../pages/Books'

export const Main = () => {
  const [ books, setBooks ] = useState()

  useEffect( () => {
    axios.get( 'http://localhost:9000/api/v0/books' )
      .then( res => setBooks( res.data ) )
  }, [] )

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/magazines">Magazines</Link></li>
          <li><Link to="/authors">Authors</Link></li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route path="/books">
            <Books books={ books } />
          </Route>
          <Route path="/magazines">
            <h1>Magazines</h1>
          </Route>
          <Route path="/authors">
            <h1>Authors</h1>
          </Route>
        </Switch>
      </section>
    </>
  )
}

export default Main