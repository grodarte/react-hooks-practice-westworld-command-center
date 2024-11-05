import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { useEffect } from "react/cjs/react.production.min";

function HostInfo({ areas, host }) {
  const [hostArea, setHostArea] = useState(host.area)
  const [hostActive, setHostActive] = useState(host.active)

  console.log("I am the selected host:", host.firstName)


  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  const areaObjects = areas.map(area=>{
    return { 
      key: area.name, 
      text: area.name.replace("_", " ").split(" ").map(word=> {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          }
        ).join(" "), 
      value: area.name
    }
  })

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [options] = useState(areaObjects);


  const [value] = useState(host.area);

  function handleOptionChange(e, { value }) {
    //fetch and update, send info back up the chain
    console.log(value)
    setHostArea(value)
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    console.log("The radio button fired");
    setHostActive(hostActive=>!hostActive)
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} | {host.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={hostActive ? "Active" : "Decommissioned"}
                checked={hostActive}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={hostArea}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
