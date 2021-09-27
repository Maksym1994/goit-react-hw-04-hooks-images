import { useState, useEffect } from 'react';
import Spinner from 'components/Loader';
import Searchbar from 'components/Searchbar';
import { getImages } from 'components/services/api';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVE: 'resolved',
  REJECT: 'rejected',
};

export default function App() {
  const [searchPicture, setSearchPicture] = useState(null);
  const [pictureName, setPictureName] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!pictureName) return;
    async function getFetchImages() {
      try {
        setStatus(STATUS.PENDING);
        const newPicture = await getImages(pictureName, page);
        if (newPicture.length === 0) {
          return toast.error(`Картинки по запросу ${pictureName} не найдены`, { duration: 2000 });
        }
        setImages(prevImages => [...prevImages, ...newPicture]);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        setStatus(STATUS.REJECT);
        toast.error('error');
      } finally {
        setStatus(STATUS.REJECT);
      }
    }
    getFetchImages();
  }, [page, pictureName]);

  const handleFormSubmit = pictureName => {
    setPage(1);
    setImages([]);
    setPictureName(pictureName);
  };

  const handleLoadMore = () => {
    setPage(p => p + 1);
  };

  const handleSelectedImage = imageURL => {
    setShowModal(!showModal);
    setSearchPicture(imageURL);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === STATUS.PENDING && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      <ImageGallery images={images} onSelect={handleSelectedImage} />
      {images.length >= 12 && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal
          src={searchPicture.largeImageURL}
          alt={searchPicture.tags}
          onCloseModal={handleSelectedImage}
        />
      )}
      <Toaster position="top-right" />
    </div>
  );
}
