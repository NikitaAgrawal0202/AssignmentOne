import { CDN_URL } from "../../utils/constant"

const ResturantCard = ({resData}) => {
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id} = resData?.info
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200' key={resData?.id}>
            <img src={CDN_URL + cloudinaryImageId}
            alt="res-logo" className='rounded-lg ' />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
    )
};

export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard;