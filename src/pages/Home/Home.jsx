import HeroSection from "../../components/Herosection/HeroSection";
import Service from "../../components/Service/Service";
import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Service />
      <Gallery />
    </Layout>
  );
};
export default Home;
