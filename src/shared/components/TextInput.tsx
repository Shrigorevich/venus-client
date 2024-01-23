function TextInput(props: {
  name: string;
  placeholder: string;
  value?: string;
  form?: string;
  onInput: (e: InputEvent) => void;
}) {
  return (
    <input
      type="text"
      name={props.name}
      id={props.name}
      class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      placeholder={props.placeholder}
      value={props.value ?? ""}
      form={props.form ?? ""}
      onInput={props.onInput}
    />
  );
}

export default TextInput;
