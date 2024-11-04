import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList"

function Area({ area }) {
  const {id, name, limit, auth_req} = area

  return (
    <div
      className="area"
      id={name}
    >
      <h3 className="labels">
        {name.replace("_", " ").split(" ").map(word=>{
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }).join(" ")}
      </h3>
      <HostList/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;