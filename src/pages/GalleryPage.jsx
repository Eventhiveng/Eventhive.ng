import { useEffect } from "react";
import GalleryComp from "../components/GalleryComp";
import PageHeader from "../components/PageHeader";

const GalleryPage = () => {
  useEffect(() => {
    document.title = "Gallery | Eventhive";

    return () => {
      document.title = "Gallery | Eventhive";
    };
  }, []);
  return (
    <main className="gallery-page">
      <PageHeader title={"Gallery"} bgdImg={"/images/headers/gallery.png"} />

      <div className="container">
        <GalleryComp />
      </div>
    </main>
  );
};

export default GalleryPage;
