import Select from "react-select";
import styles from "./SelectList.module.css";

type SearchTypes = {
  isSearchable: boolean;
  defaultOption?: { value: string; label: string };
  options: { value: string; label: string }[];
  className?: string;
  classNamePrefix?: string;
  name?: string;
  onChange?: any;
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
  function customTheme(theme) {
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

  const customStyles = {
    control: (styles) => ({
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
    option: (styles) => ({
      ...styles,
      cursor: "pointer",
      fontSize: "inherit",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--text-100)",

      ":hover": {
        color: "var(--text-100)",
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    menu: (styles) => ({
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
      onChange={onChange}
    />
  );
}

export default SelectList;
