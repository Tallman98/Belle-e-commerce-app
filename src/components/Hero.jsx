import { Carousel } from "antd";
import img1 from "../assets/images/slideshow-banners/belle-banner1.jpg";
import img2 from "../assets/images/slideshow-banners/belle-banner2.jpg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <Carousel autoplay autoplaySpeed={5000} dots={false}>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.15)] "></div>
            <img
              src={img1}
              alt="img_1"
              className="object-cover w-full h-screen"
            />
            <div className="absolute text-white top-[80%] text-center left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <h2 className="text-5xl font-bold">SHOP OUR NEW COLLECTION</h2>
              <p className="my-4 text-lg">
                FROM HIGH TO LOW, CLASSIC OR MORDERN. WE HAVE YOU COVERED
              </p>
              <Button text="SHOP NOW" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.15)] "></div>
            <img
              src={img2}
              alt="img_2"
              className="object-cover w-full h-screen"
            />

            <div className="absolute text-white top-[80%] text-center left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <h2 className="text-5xl font-bold">SUMMER BIKINI COLLECTION</h2>
              <p className="my-4 text-lg">
                SAVE UP TO 50% OFF THIS WEEKEND ONLY
              </p>
              <Button text="SHOP NOW" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
