import { JSX, Show } from "solid-js";

function InputBox(props: {
  children: JSX.Element;
  label?: string;
  hideLabel?: boolean;
}) {
  return (
    <div class="my-2 ">
      <Show when={!props.hideLabel}>
        <label
          for={props.label}
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}
        </label>
      </Show>

      <div class="mt-2">
        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default InputBox;
