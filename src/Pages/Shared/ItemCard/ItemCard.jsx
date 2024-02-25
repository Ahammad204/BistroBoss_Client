/* eslint-disable react/prop-types */


const ItemCard = ({ item }) => {

    const { image, name, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{name}</h2>
                <p className="my-4">{recipe}</p>
                <div className="card-actions">
                    <button className="btn border-b-yellow-700 border-b-4 outline-none text-yellow-600 hover:bg-slate-600 hover:border-none hover:text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;