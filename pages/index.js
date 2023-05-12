import About from "../components/about/About";
import Header from "../components/header/Header";
import ArticleList from "../components/article-list/ArticleList";
import Contact from "../components/contact/Contact";
export default function Home() {
  return (
    <>
      <Header />
      <About />
      <ArticleList />
      <Contact/>
    </>
  );
}
