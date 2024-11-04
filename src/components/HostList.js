import React from "react";
import { Card } from "semantic-ui-react";

function HostList({  }) {
  return (
    // itemsPerRow should be the area limit/2 otherwise default to 9 for cold storage - or provide 
    <Card.Group itemsPerRow={6}>{/* What do you think, partner? */}</Card.Group>
  );
}

export default HostList;
