import './App.css';
import MainContainer from './components/mainContainer';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import FeaturedLists from './components/featuredLists';

function App() {
  const categories = <Categories />
  const featuredLists = <FeaturedLists />
  return (
    <>
      <Header />
      <Hero />
      <MainContainer newcontent={categories}/>
      <MainContainer newcontent={featuredLists}/>

    </>
  );
}

export default App;
