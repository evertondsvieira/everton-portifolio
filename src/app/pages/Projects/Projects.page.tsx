/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "../../components/Container";

const HomePage: React.FC = () => {
  const images = [
    "/app1.png",
    "/app2.png",
    "/app3.png",
    "/app4.png",
    "/app5.png",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container bgColor={true}>
      <div id="Projects" className="w-full flex flex-col min-h-screen gap-8">
        <h1 className="text-4xl font-medium">E-commerce</h1>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          swipeable={false}
          arrows={false}
          showDots={true}
          draggable={true}
        >
          {images.map((src, i) => (
            <div key={i}>
              <Image
                src={src}
                alt={`Foto do aplicativo - ${i}`}
                width={380}
                height={380}
              />
            </div>
          ))}
        </Carousel>
        <p className="text-2xl text-justify">
          An e-commerce app, built with the Expo platform, delivers a genuinely
          intuitive experience. With a fluid interface, users can easily explore
          various categories, view product lists, and add items to the cart
          conveniently. It includes a dedicated screen for user registration and
          settings, ensuring a personalized experience adapted to individual
          preferences. The app's agility and efficiency guarantee smooth
          navigation and an optimized shopping journey.
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
