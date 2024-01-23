function Tag(props: {
  id: number;
  name: string;
  onClick: (id: number) => void;
  colorHex: string;
}) {
  const onClick = (e: MouseEvent) => {
    props.onClick(props.id);
  };

  return (
    <div
      style={`background-color: ${props.colorHex}`}
      onClick={onClick}
      class="my-1 mx-1 px-3 pb-0.5 rounded-2xl text-white hover:cursor-pointer"
    >
      {props.name}
    </div>
  );
}

export default Tag;
//bg-[${props.colorHex}]
