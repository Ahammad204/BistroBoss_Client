/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ChefService from "../../Shared/ChefService/ChefService";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <ChefService bgImg={coverImg} title={title}></ChefService>}

            <div className="grid md:grid-cols-2 gap-4 my-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link className="justify-center flex" to={`/order/${title}`}>
                <div className="card-actions">
                    <button className="btn  border-b-yellow-700 border-b-4 outline-none text-yellow-600 hover:bg-slate-600 hover:border-none hover:text-white">Order Your Favorite Food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;