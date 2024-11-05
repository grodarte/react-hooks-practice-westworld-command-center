import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ areas, hosts, selectedHost, onSelectHost }) {
  const areaElements = areas.map(area => {
    const areaHosts = hosts.filter(host=> host.active && host.area === area.name)

    return <Area key={area.id} area={area} hosts={areaHosts} selectedHost={selectedHost} onSelectHost={onSelectHost}/>
  }
  )

  return <Segment id="map">{areaElements}</Segment>;
}

export default WestworldMap;
