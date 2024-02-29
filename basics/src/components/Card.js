
import { IMG_CDN_URl } from '../config';
const Card=({
    name,
    cuisines,
    avgRating,
    cloudinaryImageId
  })=>{
    return(
        <div className='card'>
            <img src={IMG_CDN_URl+cloudinaryImageId }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} average rating</h4>
        </div>
    )
  }
export default Card;