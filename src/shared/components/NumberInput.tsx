function NumberInput(props: {
  name: string;
  placeholder?: string;
  value?: number;
  form?: string;
  min?: number;
  max?: number;
  maxWidth?: string;
  onInput: (e: InputEvent) => void;
}) {
  return (
    <input
      type="number"
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
      value={props.value ?? "gg"}
      form={props.form ?? ""}
      onInput={props.onInput}
      min={props.min}
      class={
        "flex-1 block border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 " +
          props.maxWidth ?? ""
      }
    />
  );
}

export default NumberInput;
