import { Helmet } from "react-helmet-async";
import ChefService from "../../Shared/ChefService/ChefService";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomand from "../ChefRecomanded/ChefRecomand";

import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <ChefService title="Bistro Boss"></ChefService>
           <PopularMenu></PopularMenu>
           <ChefRecomand></ChefRecomand>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;