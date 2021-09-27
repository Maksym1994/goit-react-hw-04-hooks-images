 
import axios from 'axios';

const API = '22683403-802ec757cc56aeed5d838f42d';

export const getImages = async (pictureName, page) => {
    const {data: {hits}} = await axios.get(`https://pixabay.com/api/?q=${pictureName}&page=${page}&key=${API}&image_type=photo&orientation=horizontal&per_page=12`)
  
    return  hits;
  }