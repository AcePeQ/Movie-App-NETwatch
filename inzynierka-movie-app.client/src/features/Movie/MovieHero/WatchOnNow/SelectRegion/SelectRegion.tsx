import Select, { CSSObjectWithLabel, SingleValue, Theme } from "react-select";

import { getFlagEmoji } from "../../../../../helpers/getFlagEmoji";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { RegionType } from "../../../../../utils/types";

polyfillCountryFlagEmojis();

function SelectRegion({
  regions,
  onSelectRegion,
}: {
  regions: RegionType[];
  onSelectRegion: (
    selectedRegion: SingleValue<{ value: string; label: string }>
  ) => void;
}) {
  function customTheme(theme: Theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        text: `var(--text-100)`,
        primary50: `var(--accent-200)`,
        primary25: `var(--background-300)`,
        primary: `var(--accent-100)`,
        neutral0: `var(--background-200)`,
        neutral10: `var(--background-200)`,
        neutral80: `var(--text-100)`,
      },
    };
  }

  const customStyles = {
    container: (styles: CSSObjectWithLabel) => ({
      ...styles,
      width: "100%",
    }),
    control: (styles: CSSObjectWithLabel) => ({
      ...styles,
      border: "none",
      padding: "0 0.5rem",
      outline: "none",
      maxHeight: "4rem",
      fontFamily: "inherit",
      cursor: `pointer`,
      transition: `var(--transition-all)`,
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
    }),
    dropdownIndicator: (styles: CSSObjectWithLabel) => ({
      ...styles,
      color: `var(--accent-100)`,

      ":hover": {
        color: `var(--accent-100)`,
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

  const selectRegions = regions.map((item: RegionType) => {
    return {
      value: item.iso_3166_1,
      label: `${getFlagEmoji(item.iso_3166_1)} ${item.english_name}`,
    };
  });
  const defaultRegion = selectRegions.findIndex(
    (item: { value: string }) => item.value === "GB"
  );

  return (
    <Select
      theme={customTheme}
      styles={customStyles}
      className="basic-single"
      classNamePrefix="region"
      isSearchable={true}
      name="region"
      options={selectRegions}
      defaultValue={selectRegions[defaultRegion]}
      onChange={onSelectRegion}
    />
  );
}

export default SelectRegion;
