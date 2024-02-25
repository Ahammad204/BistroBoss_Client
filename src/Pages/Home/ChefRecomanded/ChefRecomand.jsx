import { useEffect, useState } from "react";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import ItemCard from "../../Shared/ItemCard/ItemCard";


const ChefRecomand = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {

        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.chef_Recommend === 'yes')
                setMenu(popularItems)
            })

    }, [])

    return (
        <section className="mb-10">
            <SectionTitles heading={"Chef Recommend"} subHeading={"Should Try"}></SectionTitles>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    menu.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecomand;