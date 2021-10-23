import Select, { SingleValue } from "react-select";
import { TypeFilterLabel, TypeFilterWrapper } from "./TypeFilter.css";
import selectStyles from "./SelectStyles";

interface TypeFilterProps {
  handleTypeSelect: (type: string | null) => void;
  types: string[];
}

function TypeFilter({ types, handleTypeSelect }: TypeFilterProps): JSX.Element {
  const options: { value: string; label: string }[] = types.map((type) => ({
    value: type,
    label: type,
  }));
  const handleChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    if (newValue && newValue.value) {
      handleTypeSelect(newValue.value);
    } else {
      handleTypeSelect(null);
    }
  };

  return (
    <div className={TypeFilterWrapper}>
      <label htmlFor="type-filter" className={TypeFilterLabel}>
        Filter by Type
      </label>
      <Select
        styles={selectStyles}
        id="type-filter"
        onChange={handleChange}
        options={options}
        isClearable={true}
      />
    </div>
  );
}

export default TypeFilter;
