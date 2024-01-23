export interface PurchaseType {
  name: string;
  price: number;
  discount: number;
  unitId: number;
  quantity: number;
  currencyId: number;
  description: string;
  tagIds: Array<Number>;
  date: string;
}
