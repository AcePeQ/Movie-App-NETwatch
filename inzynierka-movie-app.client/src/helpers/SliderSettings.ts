export function sliderSettings() {
  const settings = {
    speed: 1000,
    dots: false,

    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: false,
    swipe: false,

    infinite: false,
    initalSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 800,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 700,
          swipe: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: true,
          arrows: false,
        },
      },
    ],
  };

  return settings;
}

export function sliderCastSettings() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 6,
      slidesToSlide: 6,
    },
    laptop: {
      breakpoint: { max: 1300, min: 1085 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1085, min: 750 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet_small: {
      breakpoint: { max: 750, min: 600 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 400 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile_small: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return responsive;
}

export function sliderSeasonsSettings() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 6,
      slidesToSlide: 6,
    },
    laptop: {
      breakpoint: { max: 1300, min: 1085 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1085, min: 750 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet_small: {
      breakpoint: { max: 750, min: 600 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 400 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile_small: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return responsive;
}

export function sliderSimilarSettings() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
      slidesToSlide: 4,
    },
    laptop: {
      breakpoint: { max: 1500, min: 1300 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1300, min: 950 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet_small: {
      breakpoint: { max: 950, min: 650 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 400 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile_small: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return responsive;
}

export function movieSettings() {
  const settings = {
    transitionDuration: 750,
    showDots: false,
    draggable: false,
    swipeable: false,
    containerClass: "carousel-cast",
    itemClass: "carousel-item-cast",
    arrows: true,
    removeArrowOnDeviceType: [
      "tablet_small",
      "mobile",
      "mobile_small",
      "tablet",
    ],
  };
  return settings;
}

export function movieMobileSettings() {
  const settings = {
    transitionDuration: 500,
    showDots: false,
    draggable: true,
    swipeable: true,
    containerClass: "carousel-cast",
    itemClass: "carousel-item-cast",
    arrows: false,
    removeArrowOnDeviceType: [
      "tablet_small",
      "mobile",
      "mobile_small",
      "tablet",
    ],
  };
  return settings;
}
