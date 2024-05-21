import axios from "axios"
import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import Delete from "../components/Delete";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

const MyCards = () => {

    const [cards, setCards] = useState<CardType[]>([]);
    const [error, setError] = useState<string | null>();
    const navigate = useNavigate();

    const url = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards'


    const getMyCards = () => axios.get(url, {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    });

    useEffect(() => {
        setError(null);

        getMyCards()
            .then((res) => {
                setCards(res.data);
                setError(null);
            })
            .catch(() => {
                setError("Network error");
            })

    }, []);


    return (
        <div className="h-screen bg-gray-400 dark:bg-gray-600 flex flex-row flex-wrap justify-center items-start">
            {error && <div>{error}</div>}
            {cards.map((c) => (
                <div
                    key={c._id}
                    className="bg-gray-600 dark:bg-gray-800 flex flex-col justify-center items-center shadow-2xl p-5 w-96 h-90 mx-5 rounded-md mt-10 text-center"
                >
                    <h2 className="text-xl">{c.title}</h2>
                    <hr />
                    <p>{c.subtitle}</p>

                    <img className="w-70 h-60" src={c.image.url} alt={c.image.alt} />
                    <div className="flex">
                        <Delete id={c._id} />
                        <button className="text-white" onClick={() => {
                            navigate(`/update/${c._id}`)
                        }}><FaPencilAlt className="text-gray-300 dark:text-gray-400 text-2xl mt-4 mr-4" /></button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default MyCards