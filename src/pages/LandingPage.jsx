import Hero from "../components/Hero";
import { newArrivals } from "../constants";
import Arrivals from "../components/Arrivals";
import { useState } from "react";
import ArrivalCard from "../components/ArrivalCard";

const LandingPage = () => {
  const [isActive, setIsActive] = useState("women");
  const arrivals = newArrivals;

  return (
    <section>
      <Hero />
      <div className="flex justify-center text-center">
        <div className="mt-12">
          <h2 className="text-lg font-[500]">NEW ARRIVALS</h2>
          <p className="text-xs font-[400] text-[#4f4f4f] my-2">
            Browse the huge variety of our products
          </p>
          <section className="flex  gap-5 justify-center">
            {arrivals.map((arrival) => (
              <div className=" text-sm font-[500]" key={arrival.id}>
                <Arrivals
                  {...arrival}
                  active={arrival.name === isActive}
                  key={arrival.id}
                  onClick={() => {
                    setIsActive(arrival.name);
                  }}
                />
              </div>
            ))}
          </section>
          {arrivals.map((arrival, i) => (
            <div key={i} className="md:flex-row  flex-col flex gap-6 mt-5">
              {isActive === arrival.name &&
                arrival.items.map((item) => (
                  <ArrivalCard {...item} key={item.id} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
