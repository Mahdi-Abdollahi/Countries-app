import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";
import CountryDetail from "../../components/CountryDetail";

export default function Country({ country }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{country.name}</title>
      </Head>
      <CountryDetail countryDetail={country} />
    </>
  );
}

export async function getStaticProps({ params }) {
  let country;
  try {
    country = (
      await axios.get(` https://restcountries.com/v2/name/${params.country}`)
    )?.data[0];
  } catch (error) {
    console.log(error);
  }
  if (!country) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      country,
    },
  };
}

export async function getStaticPaths() {
  let countries = [];
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    countries = await response?.data;
  } catch (error) {
    console.log(error);
  }
  const paths = countries?.map((country) => {
    return {
      params: { country: country.name.official.toString() },
    };
  });
  return { paths, fallback: true };
}
