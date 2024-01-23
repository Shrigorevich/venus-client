import { createStore } from "solid-js/store";
import { PurchaseType } from "./PurchaseType";
import MoneyInput from "../../shared/components/MoneyInput";
import TextInput from "../../shared/components/TextInput";
import NumberInput from "../../shared/components/NumberInput";
import InputBox from "../../shared/components/InputBox";
import SelectInput from "../../shared/components/SelectInput";
import TagSelect from "../../shared/components/TagSelector.tsx/TagSelect";

function PurchaseWizard() {
  //Mocked
  const currencies = [
    { id: 1, code: "UAH", name: "Ukrainian hryvnia" },
    { id: 2, code: "USD", name: "US Dollar" },
  ];
  //Mocked
  const units = [
    { id: 1, code: "kg", description: "Kilogram" },
    { id: 2, code: "g", description: "Gram" },
    { id: 3, code: "L", description: "Liter" },
    { id: 4, code: "ml", description: "milliliter" },
  ];
  //Mocked
  const tags = [
    { id: 1, name: "food1" },
    { id: 2, name: "taxes2" },
    { id: 3, name: "rent3" },
    { id: 4, name: "food4" },
    { id: 5, name: "taxes5" },
    { id: 6, name: "rent6" },
    { id: 7, name: "food7" },
    { id: 8, name: "taxes8" },
    { id: 9, name: "rent9" },
  ];

  const [purchase, updatePurchase] = createStore<PurchaseType>({
    name: "",
    price: 0,
    discount: 0,
    unitId: 1,
    quantity: 1,
    currencyId: 1,
    description: "",
    tagIds: [],
    date: new Date().toISOString(),
  });

  const onInput = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    updatePurchase({ ...purchase, [target.name]: target.value });
    console.log(purchase);
  };

  const onSelect = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    updatePurchase({ ...purchase, [target.name]: target.value });
    console.log(purchase);
  };

  return (
    <div class="p-2 max-w-96">
      <form id="purchase-wizard">
        <h1 class="mb-2 text-2xl">New purchase</h1>
        <InputBox label="Name">
          <TextInput
            name="name"
            placeholder="Name"
            onInput={onInput}
            form="purchase-wizard"
          />
        </InputBox>
        <div class="flex flex-row gap-3">
          <div class="basis-2/5">
            <InputBox label="Price">
              <NumberInput
                name="price"
                form="purchase-wizard"
                onInput={onInput}
                min={0}
                maxWidth="max-w-[136px]"
              />
            </InputBox>
          </div>
          <div class="basis-2/5">
            <InputBox label="Discount">
              <NumberInput
                name="discount"
                form="purchase-wizard"
                onInput={onInput}
                min={0}
                maxWidth="max-w-[136px]"
              />
            </InputBox>
          </div>
          <div class="basis-1/5">
            <InputBox label="Unit">
              <SelectInput
                name="unitId"
                value={1}
                options={units.map((c) => ({ value: c.id, name: c.code }))}
                onChange={onSelect}
                maxWidth="max-w-[72px]"
              />
            </InputBox>
          </div>
        </div>

        <div class="flex flex-row gap-3">
          <div class="basis-5/6">
            <InputBox label="Quantity">
              <NumberInput
                name="Quantity"
                placeholder="0.00"
                onInput={onInput}
                min={0}
              />
            </InputBox>
          </div>
          <div class="basis-1/6">
            <InputBox label="Unit">
              <SelectInput
                name="unitId"
                value={2}
                options={units.map((c) => ({ value: c.id, name: c.code }))}
                onChange={onSelect}
              />
            </InputBox>
          </div>
        </div>

        <InputBox label="Description">
          <TextInput
            name="description"
            placeholder="So impulsive"
            onInput={onInput}
            form="purchase-wizard"
          />
        </InputBox>

        <TagSelect options={tags} />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default PurchaseWizard;
