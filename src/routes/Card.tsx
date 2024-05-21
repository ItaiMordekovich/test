import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardType, ErrorType } from "../@types/types";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaHeart } from 'react-icons/fa6';
import { FaPencilAlt } from "react-icons/fa";


const Card = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState<CardType>();
    const [error, setError] = useState<ErrorType>();
    const [liked, setLiked] = useState(false);


    const url = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`;

    useEffect(() => {

        const getCardById = async () => {
            try {
                const response = await axios.get(url);
                const cardData = response.data;
                setCard(cardData);
                const user_id = localStorage.getItem("user_id");
                const likedByCurrentUser = cardData.likes.includes(user_id);
                setLiked(likedByCurrentUser);
                console.log(cardData)


            } catch (error) {
                const status = error.response ? error.response.status : null;
                const message = error.message;
                const details = error.response ? error.response.data : null;
                setError({ status, message, details });
            }
        };

        getCardById();
    }, [id]);

    const deleteCard = () => axios.delete(url, {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },

    })
        .then(() => {
            toast.success("Card Delete Success!", { position: "top-center", autoClose: 2000 });
            setTimeout(() => {
                navigate("/");
            }, 2500);
        })
        .catch((error) => {
            console.error("Error delete card:", error);
            toast.error("Failed to delete card", { position: "top-center", autoClose: 2000 });
        });

    const handleLike = async () => {
        try {
            const response = await axios.patch(url, {
                liked: !liked,
            }, {
                headers: {
                    "x-auth-token": localStorage.getItem("token"),
                },
            });

            const updatedCardData = response.data;
            console.log(updatedCardData)

            setLiked((prevLiked) => !prevLiked);
            localStorage.setItem(`liked_${id}`, JSON.stringify(!liked));

        } catch (error) {
            console.error('Error updating card:', error);
        }
    };

    const currentUserId = localStorage.getItem("user_id");

    return error ? (
        <div>
            <h2>{error.message}</h2>
        </div>
    ) : (
        <div className="bg-gray-400 dark:bg-gray-600 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start items-center bg-gray-600 dark:bg-gray-800 shadow-2xl p-5 w-1/3 mx-auto rounded-md my-2 text-center ">
                <ToastContainer />
                <h2 className="text-3xl text-black dark:text-white">{card?.title}</h2>
                <img className="w-80 h-60 mt-3" src={card?.image.url} alt={card?.image.alt} />
                <div className="flex flex-col items-start mt-3 mb-2">
                    <p className="text-1xl text-black dark:text-white ">{card?.subtitle}</p>
                    <p className="text-1xl text-black dark:text-white ">Phone: {card?.phone}</p>
                    <p className="text-1xl text-black dark:text-white ">Email: {card?.email}</p>
                    <p className="text-1xl text-black dark:text-white ">Web: {card?.web}</p>
                    <p className="text-1xl text-black dark:text-white ">Address: {card?.address.city} {card?.address.street} {card?.address.houseNumber}</p>
                </div>
                <hr />

                <div className="flex justify-center items-baseline">
                    {currentUserId === card?.user_id && (
                        <div>
                            <button className="text-white" onClick={() => {
                                deleteCard()
                            }}><RiDeleteBin6Fill className="text-gray-300 dark:text-gray-400 text-2xl mt-4 mr-4" /></button>

                            <button className="text-white" onClick={() => {
                                navigate(`/update/${id}`)
                            }}><FaPencilAlt className="text-gray-300 dark:text-gray-400 text-2xl mt-4 mr-4" /></button>
                        </div>
                    )}

                    <button onClick={handleLike}>{liked ? <FaHeart className="text-red-600 text-2xl" /> : <FaHeart className="text-gray-300 dark:text-gray-400 text-2xl mt-2" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
