
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem ({image, onClick}) {

    const {webformatURL, tags} = image;
    return (
       <li className={s.ImageGalleryItem} 
          onClick={onClick}>
       <img 
          className={s.ImageGalleryItemImage} 
          src={webformatURL} 
          alt={tags}/>
</li>
)
}