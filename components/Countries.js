import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchInput from "./SearchInput";
import { useRouter } from "next/router";
import {
  getAllCountries,
  getCountriesByRegion,
  getSearchedCountries,
} from "../api";
import Filters from "./Filters";

const dropDownOptions = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

function Countries({ countries: _countries }) {
  const router = useRouter();

  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [error, setError] = useState(null);

  const searchInputHandler = (event) => setSearch(event.target.value);

  const selectDropDownMenuHandler = (_selectedRegion) => {
    if (_selectedRegion) {
      setSelectedRegion(_selectedRegion.value);
    } else {
      setSelectedRegion(null);
    }
  };

  useEffect(() => {
    setCountries(_countries);
  }, [_countries]);

  useEffect(() => {
    if (search?.length) {
      setError(null);
      setLoading(true);

      getSearchedCountries(search)
        .then((res) => {
          setCountries(res);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(true);
      setError(null);
      getAllCountries().then((res) => {
        setCountries(res);
        setLoading(false);
      });
    }
  }, [search]);

  useEffect(() => {
    if (selectedRegion?.length) {
      setError(null);
      setLoading(true);

      getCountriesByRegion(selectedRegion)
        .then((res) => {
          setCountries(res);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(true);
      setError(null);
      getAllCountries().then((res) => {
        setCountries(res);
        setLoading(false);
      });
    }
  }, [selectedRegion]);

  return (
    <div className="container">
      <Filters
        onSearch={searchInputHandler}
        searchedValue={search}
        dropDownOptions={dropDownOptions}
        onSelect={selectDropDownMenuHandler}
        selectedOption={selectedRegion}
      />
      <main className="main">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          countries?.map((country) => {
            const { name, population, region, capital, flag, numericCode } =
              country;
            return (
              <Card
                key={numericCode}
                name={name}
                population={population}
                region={region}
                capital={capital}
                flag={flag}
              />
            );
          })
        )}
      </main>
    </div>
  );
}

export default Countries;
