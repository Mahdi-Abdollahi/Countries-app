import styles from "../styles/Countries.module.css";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchInput from "./SearchInput";
import { useRouter } from "next/router";
import { getAllCountries, getSearchedCountries } from "../api";

function Countries({ countries: _countries }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);
  const searchInputHandler = (event) => setSearch(event.target.value);
  const router = useRouter();

  useEffect(() => {
    setCountries(_countries);
  }, [_countries]);

  console.log("search: ", search);
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

  return (
    <>
      <section>
        <SearchInput onSearch={searchInputHandler} searchedValue={search} />
      </section>
      <main className={styles.container}>
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
    </>
  );
}

export default Countries;
