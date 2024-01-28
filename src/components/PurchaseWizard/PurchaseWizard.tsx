import { createStore } from "solid-js/store";
import { PurchaseType } from "./PurchaseType";
import TextInput from "../../shared/components/TextInput";
import NumberInput from "../../shared/components/NumberInput";
import InputBox from "../../shared/components/InputBox";
import SelectInput from "../../shared/components/SelectInput";
import TagSelect from "../../shared/components/TagSelector.tsx/TagSelect";
import { Configuration } from "../../shared/types/Configuration";
import { createEffect } from "solid-js";
import { Currency } from "../../shared/types/Currency";
import { Unit } from "../../shared/types/Unit";
import { TagType } from "../../shared/types/TagType";

function PurchaseWizard(props: {
  units: Unit[];
  currencies: Currency[];
  tags: TagType[];
}) {
  createEffect(() => {
    console.log("Config: " + props.currencies);
  });

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

  const updateTags = (tags: TagType[]) => {
    updatePurchase({ ...purchase, tagIds: tags.map((x) => x.id) });
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
                maxWidth="max-w-[132px]"
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
                maxWidth="max-w-[132px]"
              />
            </InputBox>
          </div>
          <div class="basis-1/5">
            <InputBox label="Currency">
              <SelectInput
                name="currencyId"
                value={1}
                options={props.currencies.map((c) => ({
                  value: c.id,
                  name: c.code,
                }))}
                onChange={onSelect}
                maxWidth="max-w-[80px]"
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
                options={props.units.map((c) => ({
                  value: c.id,
                  name: c.code,
                }))}
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

        <TagSelect options={props.tags} updateTags={updateTags} />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default PurchaseWizard;
