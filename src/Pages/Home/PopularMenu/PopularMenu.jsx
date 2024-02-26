
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter (item => item.category === 'popular')

    return (
        <section className="mb-10">
            <SectionTitles heading={"From Our Menu"} subHeading={"Popular Item"}></SectionTitles>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem key={item._id} item = {item}></MenuItem>)
                }
            </div>
          <div className="text-center mt-10">
          <button className="btn  border-b-yellow-700 border-b-4 outline-none text-yellow-600 hover:bg-slate-600 hover:border-none hover:text-white">View Full Menu</button>
          </div>
        </section>
    );
};

export default PopularMenu;