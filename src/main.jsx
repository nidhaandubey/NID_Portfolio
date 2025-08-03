import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PortfolioPage from './PortfolioPage'
import { Helmet } from "react-helmet";

document.title = 'Nidhaan Dubey | Portfolio'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Helmet>
        <title>Nidhaan Dubey | Portfolio</title>
    </Helmet>,
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>,
)
