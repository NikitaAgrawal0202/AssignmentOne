import { CDN_URL } from "../../utils/constant"

const ResturantCard = ({resData}) => {
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id} = resData?.info
    return (
        <div className='res-card' key={resData?.id}>
            <img src={CDN_URL + cloudinaryImageId}
            alt="res-logo" className='res-logo' />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
    )
}

export default ResturantCard;