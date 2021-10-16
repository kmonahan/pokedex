import { ChangeEvent } from "react";

interface TypeFilterProps {
  handleTypeSelect: (type: string | null) => void;
  types: string[];
}

function TypeFilter({ types, handleTypeSelect }: TypeFilterProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;
    if (target.value) {
      handleTypeSelect(target.value);
    } else {
      handleTypeSelect(null);
    }
  };

  return (
    <select onChange={handleChange}>
      <option value="">All types</option>
      {types.sort().map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}

export default TypeFilter;
