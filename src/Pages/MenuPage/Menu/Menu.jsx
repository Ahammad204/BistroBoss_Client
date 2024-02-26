import { Helmet } from 'react-helmet-async';
import ChefService from '../../Shared/ChefService/ChefService';
import menuBg from "../../../assets/menu/banner3.jpg"


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>

            <ChefService bgImg={menuBg} title='Our Menu'></ChefService>
      

        </div>
    );
};

export default Menu;