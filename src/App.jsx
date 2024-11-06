import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from './components/HomePage.jsx';

function App() {
  return (
    <div align="center" className='dark:bg-gray-900 flex flex-col min-h-screen flex-grow'>

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>

      <link href="./output.css" rel="stylesheet"></link>

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={< HomePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
