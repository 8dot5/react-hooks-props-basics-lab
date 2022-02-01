import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      
      {/* If the prop bio is not pass down, or if its an empty string, don't display the <p> */}
      {!!props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* A test to see how it looked like <p>{props.github}</p>
      <p>{props.linkedin}</p> */}

      {/* Rendering the child component "Links" using the passed down props; format: props.<variable name> used when passing these down */}
      <Links github={props.github} linkedin={props.linkedin} />

    </div>
  );
}

export default About;


//if no bio is available, don't show bio