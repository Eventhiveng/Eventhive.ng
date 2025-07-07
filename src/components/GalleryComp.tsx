"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/util/data";
import Pagination from "./Pagination";
import Modal from "./Modal";

const GalleryComp = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const { galleryData } = data;
  // const allPictures = galleryData.flatMap((items) => items.pictures);
  const allPictures = useMemo(
    () => galleryData.flatMap((items) => items.pictures),
    [galleryData]
  );
  // const allCategory = galleryData.flatMap((item) => item.category);

  // const imagesToDisplay =
  //   selectedCategory === "All"
  //     ? allPictures
  //     : galleryData.find((item) => item.category === selectedCategory).pictures;
  const imagesToDisplay = useMemo(() => {
    return selectedCategory === "All"
      ? allPictures
      : galleryData.find((item) => item.category === selectedCategory)
          ?.pictures;
  }, [selectedCategory, allPictures, galleryData]);

  const itemsPerPage = selectedCategory === "All" ? 30 : 10;

  // const indexOfLastImage = currentPage * itemsPerPage;
  // const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  // const currentImages = imagesToDisplay.slice(
  //   indexOfFirstImage,
  //   indexOfLastImage
  // );
  const currentImages = useMemo(() => {
    const indexOfLastImage = currentPage * itemsPerPage;
    const indexOfFirstImage = indexOfLastImage - itemsPerPage;
    return imagesToDisplay?.slice(indexOfFirstImage, indexOfLastImage);
  }, [currentPage, itemsPerPage, imagesToDisplay]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section className="gallery-comp">
      <div className="gallery-comp-container">
        <div className="selectors">
          <ul>
            <li
              onClick={() => {
                setSelectedCategory("All");
                // setCurrentPage(1);
              }}
              className={selectedCategory === "All" ? "active" : ""}
            >
              All
            </li>
            {galleryData.map((item, index) => (
              <li
                onClick={() => {
                  setSelectedCategory(item.category);
                  // setCurrentPage(1);
                }}
                key={index}
                className={selectedCategory === item.category ? "active" : ""}
              >
                {item.category}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="gallery-container"
          // style={{ display: "flex", flexWrap: "wrap" }}
        >
          {currentImages?.map((pic, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(pic)}
              className="image"
              title="click to expand"
            >
              <img
                src={pic}
                alt={
                  selectedCategory === "All" ? "Eventhive" : selectedCategory
                }
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <Modal show={showModal} onClose={closeModal}>
          <img src={selectedImage as string} alt="Selected" loading="lazy" />
        </Modal>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={imagesToDisplay!.length}
          currentPage={currentPage}
          paginate={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default GalleryComp;
