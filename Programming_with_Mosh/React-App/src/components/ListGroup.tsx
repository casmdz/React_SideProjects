import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import {  useState } from "react";
// import { MouseEvent } from "react"
// import * as React from "react";
import Typography from "@mui/material/Typography"; // Import Typography

//interface is the shape/'interface' of an object
interface Props {
  items: string[];
  heading: string;
  //writing a function
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  // useState Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const handleListItemClick = (
  //   event: MouseEvent<HTMLDivElement, MouseEvent>,
  //   index: number
  // ) => {
  //   setSelectedIndex(index);
  // };

  return (
    <>
      {/* Display the heading using a div */}
      {/* <div>
        <h2> Wee {heading}</h2>
      </div> */}
      <i>{heading}</i>

    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <Typography variant="h3">
      {heading}
    </Typography>

      <nav aria-label="main ">
        <List>
          {items.length === 0 && <p>No Item Found</p>}
          {items.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
            >
              <ListItemButton
                selected={selectedIndex === index}
                // onClick={(event) => handleListItemClick(event, index)}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
              >
                <LocationCityIcon />
                <ListItemText primary={item} className="list-item-text" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
    </>
  );
}

{
  /* example of the && logic: 
// true && 'Mosh'
// >"Mosh"
// false && 'Mosh'
// >false  */
}
