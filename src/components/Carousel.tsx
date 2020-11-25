import React, { useState } from "react";
import { transform } from "typescript";
import "../styles/carousel.css";
import PaginationDots from "./PaginationDots";
import Slide from "./Slide";
export default function Carousel() {
  const [slide, setSlide] = useState(0);
  const getHeight = () => window.innerWidth;

  const data = [
    {
      pic:
        "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHwwfDB8&auto=format&fit=crop&w=800&q=60",
      title: "create your tour",
      desc: "build your next holiday trip with us",
    },
    {
      pic:
        "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHwwfDB8&auto=format&fit=crop&w=800&q=60",
      title: "create your tour",
      desc: "build your next holiday trip with us",
    },
    {
      pic:
        "https://images.unsplash.com/photo-1494948949099-1311f3e907a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaWxhbmR8ZW58MHwwfDB8&auto=format&fit=crop&w=800&q=60",
      title: "create your tour",
      desc: "build your next holiday trip with us",
    },
  ];

  function handleClick(position: number) {
    setSlide(position);
  }

  return (
    <div className="carousel-container">
      <div
        className="carousel-slider"
        style={{
          transform: `translate3D(0px,${slide}px,0px)`,
          transition: `transform ease-out 0.4s`,
        }}
      >
        {data.map((item, index) => {
          return <Slide picture={item.pic} />;
        })}
      </div>

      <PaginationDots setPosition={handleClick} activePosition={slide} />
    </div>
  );
}
