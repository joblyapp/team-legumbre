import HomeSectionContent from "../HomeSectionContent";
import GalleryConteiner from "../GalleryConteiner";
import SectionBanner from "../SectionBanner";

const Landing = () => {
  return (
    <div className="App bg-[#ADF5FF] w-full">
      <HomeSectionContent></HomeSectionContent>
      <GalleryConteiner></GalleryConteiner>
      <SectionBanner />
    </div>
  );
};

export default Landing;
