export default function sliderSettings() {
  const settings = {
    speed: 1500,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
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
          speed: 1000,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 750,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        },
      },
    ],
  };

  return settings;
}