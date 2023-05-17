import About from "../components/about/About";
import Header from "../components/header/Header";
import ArticleList from "../components/article-list/ArticleList";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { getArticles } from "../lib/Api";
export async function getStaticProps() {
  const aktu = await getArticles();
  return {
    props: {
      aktu,
    },
    revalidate: 1,
  };
}
export default function Home({ aktu }) {
  return (
    <>
      <Head>
        <title>Victoriuu Tattoo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <About />
      <ArticleList aktu={aktu} />
      <Contact />
      <Footer />
    </>
  );
}
