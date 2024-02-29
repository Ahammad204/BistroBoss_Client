/* eslint-disable react/prop-types */
import ChefService from "../../Shared/ChefService/ChefService";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            { title && <ChefService bgImg={coverImg} title={title}></ChefService>}

            <div className="grid md:grid-cols-2 gap-4 my-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;