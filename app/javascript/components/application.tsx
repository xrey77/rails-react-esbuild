import * as React from "react";
import * as ReactDOM from "react-dom/client";
import 'bootstrap';
import { HashRouter } from 'react-router-dom';
import Xrouters from './router';
  
document.addEventListener("DOMContentLoaded", () => {
  
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <HashRouter>
       <Xrouters/>
     </HashRouter>
  );

});


