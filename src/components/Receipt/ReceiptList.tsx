import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import SellIcon from "@material-ui/icons/Sell";
import DeleteIcon from "@material-ui/icons/Delete";
import { Item } from "../../domain/Item";

type ReceiptListProps = {
  items: Item[];
  removeItem: Function;
};

const ReceiptList: React.FC<ReceiptListProps> = ({ items, removeItem }) => {
  return (
    <List>
      {items.map(({ id, name, price }) => (
        <ListItem key={id}>
          <ListItemIcon>
            <SellIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={name} secondary={`$${price}`} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => removeItem(price)}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon color="error" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ReceiptList;
