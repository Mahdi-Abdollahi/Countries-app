import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
function CountryDetail({ countryDetail }) {
  const router = useRouter();
  return (
    <div className="country-container">
      <div>
        <button onClick={() => router.back()}>
          <IoIosArrowRoundBack />
          back
        </button>
      </div>
      <div className="country-detail">
        <div className="flag">
          <img src={countryDetail.flag} alt="" />
        </div>
        <div className="info">
          <h1>{countryDetail.name}</h1>
          <div className="main-info">
            <div>
              <p>Native name: {countryDetail.nativeName}</p>
              <p>Population: {countryDetail.population}</p>
              <p>Region: {countryDetail.region}</p>
              <p>Sub region: {countryDetail.subRegion}</p>
              <p>Capital: {countryDetail.capital}</p>
            </div>
            <div>
              <p>Domain: {countryDetail.topLevelDomain}</p>
              <p>
                Currencies:{" "}
                {countryDetail.currencies?.map((currency) => {
                  return (
                    <span key={currency} className="currency">
                      {currency.name}
                    </span>
                  );
                })}
              </p>
              <p>
                Languages:{" "}
                {countryDetail.languages?.map((language) => {
                  return (
                    <span key={language} className="languages">
                      {language.name} ,{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="country-border">
            <h4>Borders:</h4>
            {countryDetail.borders?.map((border) => {
              return (
                <Link key={border} href={`/${border}`}>
                  <button className="tag">{border}</button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
