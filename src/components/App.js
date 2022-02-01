import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import user from "../data/user";
//console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} name={user.name} city={user.city} />

      {/*Pass down the github and linkedin links to the About component, so that About can pass those props down to the Links component (child of About) */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} /> 

    </div>
  );
}

export default App;
