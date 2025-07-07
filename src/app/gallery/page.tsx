import GalleryComp from "@/components/GalleryComp";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Gallery | Eventhive.ng",
};

const Page = () => {
  return (
    <main className="gallery-page">
      <PageHeader title={"Gallery"} bgdImg={"/images/headers/gallery.png"} />

      <div className="container">
        <GalleryComp />
      </div>
    </main>
  );
};

export default Page;
