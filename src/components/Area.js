import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList"

function Area({ area, hosts, selectedHost, onSelectHost }) {
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
      <HostList limit={limit} hosts={hosts} selectedHost={selectedHost} onSelectHost={onSelectHost}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (hosts, limit, name) {
    if (hosts.length > limit) {
      throw Error(
        `HEY!! You got too many hosts in ${name}. The limit for that area is ${limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;