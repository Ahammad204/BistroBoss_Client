/* eslint-disable react/prop-types */
import ItemCard from "../../Shared/ItemCard/ItemCard";


const OrderTab = ({item}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                item.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
            }
        </div>
    );
};

export default OrderTab;