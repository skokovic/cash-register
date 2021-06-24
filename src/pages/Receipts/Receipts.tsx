import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { db } from "../../util/offlineDb";

const Receipts = () => {
  useEffect(() => {
    const items = db.receipts.toArray();
    console.log(items);
  });

  return <Typography>Receipts</Typography>;
};

export default Receipts;
