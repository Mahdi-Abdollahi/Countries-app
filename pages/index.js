import Head from "next/head";
import axios from "axios";
import Countries from "../components/Countries";
export default function Home({ countries }) {
  return (
    <div>
      <Head>
        <title>Countries Challenge</title>
        <meta name="description" content="Chanllege of Alibaba company" />
      </Head>

      <Countries countries={countries} />
    </div>
  );
}

export async function getStaticProps() {
  let countries = [];
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    countries = await response?.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      countries,
    },
  };
}
