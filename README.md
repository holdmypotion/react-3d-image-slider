I had to make an image slider for a project and I found out that there is no ready to use, cool, basic, image slider. So I went ahead and made one using swiper.
In this article we will be making that image slider together. Let's get right into it.

Live Link: [https://react-3d-image-slider.netlify.app/](https://react-3d-image-slider.netlify.app/)

# Setup

Run the following commands to setup the project.

```bash
npx create-react-app react-3d-image-slider
```

```bash
cd react-3d-image-slider
npm install swiper
```

Now, in the App.css file erase everything and copy-past the code below

```css
/* App.css */

.App {
  text-align: center;
  height: 100vh;
}

.container {
  padding: 2.5rem 0;
}
```

# Creating the Slider

Let me first throwing the required CSS for the image slider component

```css
/* src/components/ImageSlider.css */

.swiper-slide {
  transform: scale(0.7);
  transition: transform 300ms;
  opacity: 0.5;
}
.swiper-slide-active{
  transform: scale(1);
  opacity: 1;
}
.slideWrapper {
  display: flex;
  justify-content: center;
}
```

```jsx
// src/components/ImageSlider.js
import React from "react";
import "./ImageSlider.css";

// 1.
import { Swiper, SwiperSlide } from 'swiper/react';
// 2.
import SwiperCore, { Navigation, A11y } from 'swiper';
// 3. 
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
// 4.
SwiperCore.use([Navigation, A11y]);

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  // 5.
  const settings = {
    centeredSlides: true,
    loop: true,
    slidesToShow: 1,
    breakpoints: {
      820: {
        slidesPerView: slidesToShow,
      },
    },
  };

  // 6.
  const templateImages = images.map((image) => {
    if (image !== null) {
      return (
      // 7.
        <SwiperSlide key={image.id}>
          <div className="slideWrapper">
            {image.code ? image.code : <img src={image.src} alt={image.alt} />}
          </div>
        </SwiperSlide>
      );
    }
    return null;
  });

  return <Swiper {...settings} navigation style={{ '--swiper-navigation-color': 'black' }}>{templateImages}</Swiper>;
};

export default ImageSlider;
```

Let's break down this file

1. import Slider from "swiper/react"
2. import SwiperCore & needed modules rom swiper
3. import swiper core styles & needed module styles
4. install swiper modules
5. const settings hold the configuration for the slider.
6. templateImages variable holds the JSX for all the image components
7. in Slider component, each element is given an index starting from 0. This is the same way Indices work in the map() function in javascript. We are using the state "imageIndex" to keep the track of latest (center image in case of odd number of slider, i.e, 3, 5, ...)

# Usage

This code for the slider takes in the data in a format as show below

```jsx
// src/data/data.js

export const IMAGES = [
  {
    id: 1,
    src: "/images/image.png",
    alt: "Placeholder image",
  },
  {
    id: 2,
    src: "/images/image.png",
    alt: "Placeholder image",
  },
  {
    id: 3,
    src: "/images/image.png",
    alt: "Placeholder image",
  },
  {
    id: 4,
    src: "/images/image.png",
    alt: "Placeholder image",
  },
  {
    id: 5,
    src: "/images/image.png",
    alt: "Placeholder image",
  },
  {
    id: 6,
    src: "/images/image.png",
    alt: "Placeholder image",
  },
];

export const LARGE_IMAGES = [
  {
    id: 1,
    src: "/images/large_image.png",
    alt: "Placeholder image",
  },
  {
    id: 2,
    src: "/images/large_image.png",
    alt: "Placeholder image",
  },
  {
    id: 3,
    src: "/images/large_image.png",
    alt: "Placeholder image",
  },
  {
    id: 4,
    src: "/images/large_image.png",
    alt: "Placeholder image",
  },
  {
    id: 5,
    src: "/images/large_image.png",
    alt: "Placeholder image",
  },
  {
    id: 6,
    src: "/images/large_image.png",
    alt: "Placeholder image",
  },
];

export const VIDEOS = [
  {
    id: 1,
    code: (
      <iframe
        title="vid1"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/A63UxsQsEbU"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    ),
  },
  {
    id: 2,
    code: (
      <iframe
        title="vid2"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Z5iWr6Srsj8"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    ),
  },
  {
    id: 3,
    code: (
      <iframe
        title="vid3"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WRkmpqTluI8"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    ),
  },
  {
    id: 4,
    code: (
      <iframe
        title="vid4"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vyVpRiqOvt4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    ),
  },
];
```

But, you can modify it any way. If you just have a list of image urls, good enough. Just change the JSX code inside the "templateSlider" variable, accordingly!

BTW, if you are wondering that why I am referencing the images in the src attribute as

```jsx
export const LARGE_IMAGES = [
  {
    id: 1,
    src: "/images/large_image.png",
    alt: "Placeholder image",
  },
];
```

It is because the images are in the pubic folder inside a public directory.

```bash
public/images/......
```

### Using the Image Slider

```jsx
// App.js

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

```

### Thank you so much for reading.

I would love to hear your thoughts on this!
