import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])

  const inactiveHosts = hosts.filter(host=>!host.active)

  // GET areas
  useEffect(()=>{
    fetch(`http://localhost:3001/areas`)
    .then(r=>r.json())
    .then(areaData=>setAreas(areaData))
  }, [])

  // GET hosts
  useEffect(()=>{
    fetch(`http://localhost:3001/hosts`)
    .then(r=>r.json())
    .then(hostsData=>setHosts(hostsData))
  }, [])

  return (
    <Segment id="app">
      <WestworldMap areas={areas} hosts={hosts}/>
      <Headquarters hosts={hosts}/>
    </Segment>
  );
}

export default App;
