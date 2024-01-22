import { Carousel } from "antd";
import img1 from "../assets/images/slideshow-banners/belle-banner1.jpg";
import img2 from "../assets/images/slideshow-banners/belle-banner2.jpg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <section>
      <div>
        <Carousel
          autoplay={true}
          dots={false}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          autoplaySpeed={5000}
        >
          <div className="relative">
            <img src={img1} alt="img_1" />
            <div className="absolute">
              <h2 className="text-4xl">SHOW OUR NEW COLLECTION</h2>
            </div>
          </div>
          <div>
            <img src={img2} alt="img_2" />
          </div>
        </Carousel>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.15)]"></div>
        <div className="absolute"></div>
      </div>
    </section>
  );
};

export default Hero;
