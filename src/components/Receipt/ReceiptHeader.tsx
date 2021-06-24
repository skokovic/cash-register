import styled from "@emotion/styled";
import { Box, Typography, Button, Modal, Stack } from "@material-ui/core";
import React, { useState } from "react";
import { Item } from "../../domain/Item";
import PrintIcon from "@material-ui/icons/Print";
import { db } from "../../util/offlineDb";
import * as uuid from "uuid";

const ReceiptHeaderBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ModalCentered = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ReceiptHeaderProps = {
  items: Item[];
  clearItems: Function;
};

const ReceiptHeader: React.FC<ReceiptHeaderProps> = ({ items, clearItems }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const getTotal = (items: Item[]): number => {
    return items.map((item) => item.price).reduce((acc, curr) => acc + curr, 0);
  };

  const handleGenerate = () => {
    if (!items.length) return;
    setIsModalOpened(true);
    db.receipts.put({
      id: uuid.v4(),
      datetime: new Date().toISOString(),
      items: items,
    });
    clearItems();
  };

  return (
    <ReceiptHeaderBox>
      <Typography component="div" variant="h6">
        Total: ${getTotal(items).toFixed(2)}
      </Typography>
      <Button onClick={handleGenerate}>Generate</Button>

      <ModalCentered
        open={isModalOpened}
        onClose={() => setIsModalOpened(false)}
      >
        <Stack>
          <Typography variant="h1">
            Printing...
            <PrintIcon style={{ fontSize: 100 }} color="secondary" />
          </Typography>
        </Stack>
      </ModalCentered>
    </ReceiptHeaderBox>
  );
};

export default ReceiptHeader;
