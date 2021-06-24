import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Stack from "@material-ui/core/Stack";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState, KeyboardEvent } from "react";
import ReceiptHeader from "../../components/Receipt/ReceiptHeader";
import ReceiptList from "../../components/Receipt/ReceiptList";
import { Item } from "../../domain/Item";
import * as uuid from "uuid";

const NewReceipt = () => {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);

  const updateInput = (event: any) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const generateRandomPrice = () => {
    return +(Math.random() * 100).toFixed(2);
  };

  const createNewItem = (input: string): Item => {
    return {
      id: uuid.v4(),
      name: input,
      price: generateRandomPrice(),
    };
  };

  const addItem = () => {
    if (!input.length) {
      return;
    }
    setItems([...items, createNewItem(input)]);
    setInput("");
  };

  const removeItem = (price: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.price !== price));
  };

  const clearItems = () => {
    setItems([]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") {
      addItem();
    }
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="new-item"
        onChange={updateInput}
        onKeyDown={handleKeyDown}
        label="New item"
        value={input}
        variant="standard"
      />
      <Button id="add" onClick={addItem} variant="contained">
        Add
      </Button>
      <Divider />
      <Toolbar />

      <ReceiptHeader items={items} clearItems={clearItems} />
      <Divider />

      <ReceiptList items={items} removeItem={removeItem} />
    </Stack>
  );
};

export default NewReceipt;
