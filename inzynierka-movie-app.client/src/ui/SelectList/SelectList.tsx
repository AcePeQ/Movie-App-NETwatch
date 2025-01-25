import Select, {
  ActionMeta,
  CSSObjectWithLabel,
  SingleValue,
  Theme,
} from "react-select";
import styles from "./SelectList.module.css";

type SearchTypes = {
  isSearchable: boolean;
  defaultOption: { value: string; label: string };
  options: { value: string; label: string }[];
  className?: string;
  classNamePrefix?: string;
  name?: string;
  onChange?: (
    newValue: SingleValue<{ value: string; label: string }> | null,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => void;
};

function SelectList({
  isSearchable,
  options,
  defaultOption,
  className,
  classNamePrefix,
  onChange,
  name,
}: SearchTypes) {
  function customTheme(theme: Theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        text: `var(--text-100)`,
        primary50: `var(--accent-200)`,
        primary25: `var(--background-200)`,
        primary: `var(--accent-100)`,
        neutral0: `var(--background-300)`,
        neutral10: `var(--background-300)`,
        neutral80: `var(--text-100)`,
      },
    };
  }

  function handleChange(
    newValue: SingleValue<{ value: string; label: string }> | null,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) {
    if (onChange) {
      onChange(newValue, actionMeta);
    }
  }

  const customStyles = {
    control: (styles: CSSObjectWithLabel) => ({
      ...styles,
      border: "none",
      padding: "0.25rem 0.5rem",
      outline: "none",
      cursor: `pointer`,
      fontSize: "1.6rem",
      fontFamily: "inherit",
      transition: `var(--transition-all)`,
      color: "var(--text-100)",
      boxShadow: "0",
      ":hover": {
        backgroundColor: `var(--background-300)`,
      },
      ":active": {
        border: "none",
      },
    }),
    option: (styles: CSSObjectWithLabel) => ({
      ...styles,
      cursor: "pointer",
      fontSize: "inherit",
    }),
    dropdownIndicator: (styles: CSSObjectWithLabel) => ({
      ...styles,
      color: "var(--text-100)",

      ":hover": {
        color: "var(--text-100)",
      },
    }),
    indicatorSeparator: (styles: CSSObjectWithLabel) => ({
      ...styles,
      display: "none",
    }),
    menu: (styles: CSSObjectWithLabel) => ({
      ...styles,
      zIndex: "100000",
    }),
  };

  return (
    <Select
      theme={customTheme}
      styles={customStyles}
      isSearchable={isSearchable}
      options={options}
      defaultValue={defaultOption}
      className={`${styles.selectContainer} ${styles[`${className}`]}`}
      classNamePrefix={classNamePrefix}
      name={name}
      onChange={handleChange}
    />
  );
}

export default SelectList;
