import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomand from "../ChefRecomanded/ChefRecomand";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <ChefRecomand></ChefRecomand>
        </div>
    );
};

export default Home;