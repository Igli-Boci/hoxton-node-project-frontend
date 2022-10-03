import Counter from "./Counter";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Offers from "./Offers";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Offers />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
