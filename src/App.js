import "./App.css";
import { IMAGES, VIDEOS, LARGE_IMAGES } from "./data/data";

import ImageSlider from "./components/ImageSlider";

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
