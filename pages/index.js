import About from "../components/about/About";
import Header from "../components/header/Header";
import ArticleList from "../components/article-list/ArticleList";
import Contact from "../components/contact/Contact";
import CustomHelmet from "../components/CustomHelmet";
export default function Home() {
  return (
    <>
      <CustomHelmet/>
      <Header />
      <About />
      <ArticleList />
      <Contact/>
    </>
  );
}
