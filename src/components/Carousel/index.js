import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./index.scss";

const items = [
  {
    src: "/static/images/home/sliders/home.jpg",
    altText: "Slide 1",
    // caption: "ACCESS HIGHLY PAID JOBS ABROAD",
    caption: "BECOMING A GLOBAL CITIZEN",
  },
  // {
  //   src: "/static/images/home/sliders/2.png",
  //   altText: "Slide 3",
  //   // caption: "ACCESS WORLD-CLASS EDUCATION",
  //   caption: "SECURE YOUR FUTURE PROSPERITY",
  // },
  // {
  //   src: "/static/images/home/sliders/3.jpeg",
  //   altText: "Slide 2",
  //   // caption: "ACCESS HIGHLY PAID JOBS ABROAD",
  //   caption: "ACCESS HIGHLY PAID JOBS",
  // },
  // {
  //   src: "/static/images/home/sliders/4.jpeg",
  //   altText: "Slide 4",
  //   // caption: "YOUR INVESTMENT ABROAD",
  //   caption: "ACCESS WORLD CLASS EDUCATION",
  // },
  // {
  //   src: "/static/images/home/sliders/5.jpg",
  //   altText: "Slide 5",
  //   caption: "PURSUE YOUR DREAM",
  // },
  // {
  //   src: "/static/images/home/sliders/6.jpg",
  //   altText: "Slide 6",
  //   caption: "RESIDENCY & CITIZENSHIP",
  // },
  // {
  //   src: "/static/images/home/sliders/6.jpg",
  //   altText: "Slide 6",
  //   caption: "ADDITIONAL CAPTION",
  // },
  // {
  //   src: "/static/images/home/sliders/6.jpg",
  //   altText: "Slide 6",
  //   caption: "ADDITIONAL CAPTION",
  // },
];

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText="" captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        {/* <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        /> */}
      </Carousel>
    );
  }
}

export default MyCarousel;
