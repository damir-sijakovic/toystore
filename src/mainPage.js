import Header from './comps/header/header'; 
import Footer from './comps/footer/footer'; 
import Hero from './comps/hero/hero'; 
import MainAbout from './comps/mainAbout/mainAbout';
import MainFeatures from './comps/mainFeatures/mainFeatures';
import MainCards from './comps/mainCards/mainCards';
import MainProducts from './comps/mainProducts/mainProducts';


const MainPage = () => {

  return (
    <>     
    <Header />
    <Hero />
    <MainAbout />
    <MainFeatures />
    <MainProducts />
    <MainCards />
    <Footer />      
    </>
  );
}

export default MainPage;
