import { For } from "solid-js";
import { SelectOption } from "../types/SelectOption";

function SelectInput(props: {
  name: string;
  value?: string | number;
  form?: string;
  options: SelectOption[];
  maxWidth?: string;
  onChange?: (e: Event) => void;
}) {
  return (
    <select
      name={props.name}
      id={props.name}
      form={props.form}
      value={props.value}
      onChange={props.onChange}
      class={
        "block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 " +
          props.maxWidth ?? ""
      }
    >
      <For each={props.options}>
        {(opt) => <option value={opt.value}>{opt.name}</option>}
      </For>
    </select>
  );
}

export default SelectInput;
