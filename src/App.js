import './App.css';
import MainContainer from './components/mainContainer';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import FeaturedLists from './components/featuredLists';
import Insights from './components/insights';
import Location from './components/location';
import Blog from './components/blog'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Hero />
      <MainContainer newcontent= {< Categories />} />
      <MainContainer newcontent= {< FeaturedLists />} />
      <Insights />
      <MainContainer newcontent={< Location />}/>
      <MainContainer newcontent={< Blog />}/>
    </div>
  );
}

export default App;
