import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({images, onSelect}) =>  {
    return (
        <ul className={s.ImageGallery}>
            {images.map((image,id) => (
                <ImageGalleryItem key = {id} image={image} 
                onClick={() => onSelect(image)}
                />)
                )}  
           </ul>)}
             
export default ImageGallery;