import { createStore } from "solid-js/store";
import Tag from "./Tag";
import { TagType } from "../../types/TagType";
import { createSignal } from "solid-js";
import TextInput from "../TextInput";
import InputBox from "../InputBox";

function TagSelect(props: { options: TagType[] }) {
  const [selected, setSelected] = createStore<TagType[]>([]);
  const [options, setOptions] = createSignal<TagType[]>(props.options);
  const [filter, setFilter] = createSignal<string>("");

  const colors = [
    "#6060ff",
    "#6c2131",
    "#beaded",
    "#133337",
    "#ff9966",
    "#e6e6fa",
    "#fff500",
    "#6060ff",
    "#6c2131",
    "#beaded",
    "#133337",
    "#ff9966",
    "#e6e6fa",
    "#fff500",
  ];

  const addTag = (id: number) => {
    const tag = options().find((x) => x.id == id);
    setSelected([...selected, tag as TagType]);
    setOptions(options().filter((x) => x.id !== id));
  };

  const removeTag = (id: number) => {
    const tag = selected.find((x) => x.id == id);
    setSelected([...selected.filter((x) => x.id !== id)]);
    setOptions([...options(), tag as TagType]);
  };

  return (
    <div>
      <InputBox label="Tags">
        <TextInput
          name={"name"}
          placeholder={"Find tag by name"}
          onInput={(e: InputEvent) =>
            setFilter((e.target as HTMLInputElement).value)
          }
        />
      </InputBox>
      <div class="flex flex-row flex-wrap">
        <span>Selected: </span>
        {selected.map((t, i) => (
          <Tag
            id={t.id}
            name={t.name}
            onClick={removeTag}
            colorHex={colors[i]}
          />
        ))}
      </div>

      <hr />
      <br />
      <div class="flex flex-row flex-wrap">
        {options()
          .filter((x) => x.name.includes(filter()))
          .map((t, i) => (
            <Tag
              id={t.id}
              name={t.name}
              onClick={addTag}
              colorHex={colors[i]}
            />
          ))}
      </div>
    </div>
  );
}

export default TagSelect;
