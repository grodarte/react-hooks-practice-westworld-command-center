import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({ hosts, limit }) {
  const itemsInRow = limit/2
  const hostElements = hosts.map(host=><Host key={host.id} host={host} />)

  return (
    // itemsPerRow should be the area limit/2 otherwise default to 9 for cold storage - or provide 
    <Card.Group itemsPerRow={itemsInRow}>{hostElements}</Card.Group>
  );
}

export default HostList;
