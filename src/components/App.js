import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState("")

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

  function handleSelectHost(newHost){
    setSelectedHost(newHost)
  }

  return (
    <Segment id="app">
      <WestworldMap areas={areas} hosts={hosts} selectedHost={selectedHost} onSelectHost={handleSelectHost}/>
      <Headquarters areas={areas} hosts={hosts} selectedHost={selectedHost} onSelectHost={handleSelectHost}/>
    </Segment>
  );
}

export default App;