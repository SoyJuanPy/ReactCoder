import img1 from "../../assets/GalleryImg/img1.webp";
import img2 from "../../assets/GalleryImg/img2.webp";
import img3 from "../../assets/GalleryImg/img3.webp";
import img4 from "../../assets/GalleryImg/img4.webp";
import img5 from "../../assets/GalleryImg/img5.webp";
import img6 from "../../assets/GalleryImg/img6.webp";
const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={img1}
                  alt="gallery"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={img2}
                  alt="gallery"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={img3}
                  alt="gallery"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={img4}
                  alt="gallery"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={img5}
                  alt="gallery"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  className="w-full object-cover h-full object-center block"
                  src={img6}
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
