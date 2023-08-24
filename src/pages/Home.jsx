import '../styles/Home.scss';
import CardList from '../components/CardList'
import Banner from '../components/Banner'

function Home() {
  return (
    <div className="App">
      <Banner bannerClass="home-banner"/>
      <CardList/>
    </div>
  );
}

export default Home;
