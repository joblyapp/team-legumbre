import HomeSectionContent from "../HomeSectionContent";
import GalleryConteiner from "../GalleryConteiner";
import SectionBanner from "../SectionBanner";
import Footer from "../Footer";

const Landing = () => {
  return (
    <div className="App bg-[#ADF5FF] w-full">
      <HomeSectionContent></HomeSectionContent>
      <GalleryConteiner></GalleryConteiner>
      <SectionBanner />
      <Footer />
    </div>
  );
};

export default Landing;
