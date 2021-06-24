import Dexie from "dexie";
import { Receipt } from "../domain/Receipt";

class CashAppDatabase extends Dexie {
  receipts: Dexie.Table<Receipt, string>;

  constructor() {
    super("CashAppDatabase");
    this.version(1).stores({
      receipts: "id, datetime, items",
    });

    this.receipts = this.table("receipts");
  }
}

export const db = new CashAppDatabase();
