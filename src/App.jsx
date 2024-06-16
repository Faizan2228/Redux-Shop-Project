import { useState } from 'react'
import './App.css'
import { Header } from './containers/Header'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { ProductListing } from './containers/ProductListing'
import { ProductDetails } from './containers/ProductDetails'
import 'semantic-ui-css/semantic.min.css'


function App() {

  return (
    <div>
      <Router>
      <Header />
      <Routes>
      <Route path="/" exact Component={ProductListing} />
      <Route path="/product/:productId" exact Component={ProductDetails} />
      <Route>404 Not Found</Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App
