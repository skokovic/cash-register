import { ListItemIcon, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import * as React from "react";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AddIcon from "@material-ui/icons/Add";
import Inventory2Icon from "@material-ui/icons/Inventory2";
import { Link } from "react-router-dom";

const DrawerList: React.FC = () => {
  return (
    <List>
      <ListItem component={Link} to={"/new-receipt"} button key="NewReceipt">
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="New receipt" />
      </ListItem>

      <ListItem component={Link} to={"/receipts"} button key="ReceiptOverview">
        <ListItemIcon>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Receipt overview" />
      </ListItem>

      <ListItem component={Link} to={"/stock"} button key="Stock">
        <ListItemIcon>
          <Inventory2Icon />
        </ListItemIcon>
        <ListItemText primary="Stock" />
      </ListItem>
    </List>
  );
};

export default DrawerList;
