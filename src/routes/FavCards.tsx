import axios from "axios"
import { useEffect, useState } from "react";
import { CardType } from "../@types/types";

const FavCards = () => {

    const [cards, setCards] = useState<CardType[]>([]);
    const [error, setError] = useState<string | null>();
    const user_id = localStorage.getItem("user_id");
    const url = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards'

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setCards(res.data);
                setError(null);
            })
            .catch(() => {
                setError("Network error");
            });
    }, []);


    const filteredCards = cards.filter(card => card.likes.includes(user_id));

    return (
        <div className="h-screen bg-gray-400 dark:bg-gray-600 flex flex-row flex-wrap justify-center items-start">
            {error && <div>{error}</div>}
            {filteredCards.map((c) => (

                <div key={c._id} className="bg-gray-400 dark:bg-gray-600 flex flex-col  justify-center items-center mt-10">
                    <div className="bg-gray-600 dark:bg-gray-800 flex flex-col justify-center items-center shadow-2xl p-5 w-96 h-90 mx-auto rounded-md my-2 mr-5 text-center ">

                        <h2 className="text-3xl text-black dark:text-white">{c.title}</h2>
                        <img className="w-80 h-60 mt-3" src={c.image.url} alt={c.image.alt} />
                        <div className="flex flex-col items-start mt-3 mb-2">
                            <p className="text-1xl text-black dark:text-white ">{c.subtitle}</p>
                            <p className="text-1xl text-black dark:text-white ">Phone: {c.phone}</p>
                            <p className="text-1xl text-black dark:text-white ">Email: {c.email}</p>
                            <p className="text-1xl text-black dark:text-white ">Web: {c.web}</p>
                            <p className="text-1xl text-black dark:text-white ">Address: {c.address.city} {c.address.street} {c.address.houseNumber}</p>
                        </div>
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FavCards;