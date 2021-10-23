import Select, { SingleValue } from "react-select";
import { TypeFilterLabel, TypeFilterWrapper } from "./TypeFilter.css";
import selectStyles from "./SelectStyles";
import { OnChangeValue } from "react-select/dist/declarations/src/types";

interface TypeFilterProps {
  handleTypeSelect: (type: string | null) => void;
  types: string[];
}

interface Option {
  value: string;
  label: string;
}

function TypeFilter({ types, handleTypeSelect }: TypeFilterProps): JSX.Element {
  const options: Option[] = types.map((type) => ({
    value: type,
    label: type,
  }));
  const handleChange = (newValue: OnChangeValue<Option, false>) => {
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
        onChange={(newValue) => handleChange(newValue as SingleValue<Option>)}
        options={options}
        isClearable={true}
      />
    </div>
  );
}

export default TypeFilter;
