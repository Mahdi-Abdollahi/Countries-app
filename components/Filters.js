import styles from "../styles/Filters.module.css";

import React from "react";
import SearchInput from "./SearchInput";
import Select from "./DropDownMenu";

function Filters({
  onSearch,
  searchedValue,
  dropDownOptions,
  onSelect,
  selectedOption,
}) {
  return (
    <section className={styles.filters__container}>
      <SearchInput onSearch={onSearch} searchedValue={searchedValue} />
      <Select
        options={dropDownOptions}
        onSelect={onSelect}
        selectedOption={selectedOption}
      />
    </section>
  );
}

export default Filters;
