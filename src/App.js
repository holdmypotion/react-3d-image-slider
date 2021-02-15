import "./App.css";
import { IMAGES, VIDEOS, LARGE_IMAGES } from "./data/data";

import ImageSlider from "./components/ImageSlider";
import SwiperCore, { Navigation, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
// install Swiper modules
SwiperCore.use([Navigation, A11y]);

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <ImageSlider images={IMAGES} slidesToShow={5} />
      </div>
      <div className='container'>
        <ImageSlider images={VIDEOS} />
      </div>
      <div className='container'>
        <ImageSlider images={LARGE_IMAGES} />
      </div>
    </div>
  );
}

export default App;
