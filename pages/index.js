import About from "../components/about/About";
import Header from "../components/header/Header";
import ArticleList from "../components/article-list/ArticleList";
import Contact from "../components/contact/Contact";
import CustomHelmet from "../components/CustomHelmet";
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
export default function Home({aktu}) {
  return (
    <>
      <CustomHelmet />
      <Header />
      <About />
      <ArticleList aktu={aktu}/>
      <Contact/>
    </>
  );
}
