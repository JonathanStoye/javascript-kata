import React from 'react'
import Main from './components/Main'
import {
  BrowserRouter as Router,
} from "react-router-dom"

const App = ( props ) => {

  return (
    <>
      <h1>Library</h1>
      <h2>Javascript Kata - Gilad Tsabar</h2>
      <Router>
        <Main />
      </Router>
    </>
  )
};

export default App;
