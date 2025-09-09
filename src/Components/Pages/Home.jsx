import Slider from '../../Components/HomeComponent/SliderTab.jsx';
import Aniver from '../../Components/HomeComponent/Aniver.jsx';
import Rank from '../../Components/HomeComponent/HomeRank.jsx';
import AboutTab from '../../Components/HomeComponent/AboutCollage.jsx';
import Updatetab from '../../Components/HomeComponent/UpdateTab.jsx';
import AlumniLogoStrip from '../../Components/HomeComponent/AluminiSlide.jsx';
function Home() {
  return (
    <>
      <Slider/>
      <AboutTab/>
      <Aniver/>
      <Rank/>
      
      <AlumniLogoStrip/>
      <Updatetab/>
      

    </>
  );
}

export default Home;