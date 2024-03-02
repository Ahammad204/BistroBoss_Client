/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const ItemCard = ({ item }) => {

    const { image, name, recipe, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate()

    const handleAddToCart = food => {

        console.log(food)

        if (user && user.email) {



        }
        else {

            Swal.fire({
                title: "You are not logged in?",
                text: "Please Login for order food!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log In"
            }).then((result) => {
                if (result.isConfirmed) {
                
                    navigate('/login')

                }
            });

        }

    }



    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-4 px-4">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{name}</h2>
                <p className="my-4">{recipe}</p>

                <div className="card-actions">
                    <button

                        onClick={() => handleAddToCart(item)}

                        className="btn border-b-yellow-700 border-b-4 outline-none text-yellow-600 hover:bg-slate-600 hover:border-none hover:text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;