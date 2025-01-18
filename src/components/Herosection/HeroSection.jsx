import Banner from "../../assets/Banner.jpg";
const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={Banner}
            alt="Imagen de un teclado"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="absolute top-[30%] left-[45%]">
          <h1 className="text-5xl font-bold text-[red]">
            Discover Your Next Adventure!
          </h1>
          <p className="text-center text-2xl mt-5 font-semibold">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
