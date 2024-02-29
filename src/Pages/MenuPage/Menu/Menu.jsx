import { Helmet } from 'react-helmet-async';
import useMenu from '../../../Hooks/useMenu';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import menuBg from "../../../assets/menu/banner3.jpg"
import ChefService from '../../Shared/ChefService/ChefService';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter (item => item.category === 'dessert');
    const soup = menu.filter (item => item.category === 'soup');
    const salad = menu.filter (item => item.category === 'salad');
    const pizza = menu.filter (item => item.category === 'pizza');
    const offered = menu.filter (item => item.category === 'offered');
    



    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>

            <ChefService bgImg={menuBg} title='Our Menu'></ChefService>

            <SectionTitles subHeading="Don't Miss" heading='Today Offer'></SectionTitles>

        {/* Offered Menu Item */}
            <MenuCategory items={offered}></MenuCategory>
        
        {/* Dessert Menu Item */}

        <MenuCategory items={dessert} title="Desserts" coverImg={dessertImg}></MenuCategory>

        {/* Pizza Menu Item */}

        <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>

        {/* Salad Menu Item */}

        <MenuCategory items={salad} title="Salad" coverImg={saladImg}></MenuCategory>

        {/* Soup Menu Item */}

        <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>

        

        </div>
    );
};

export default Menu;