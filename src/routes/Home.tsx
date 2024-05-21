import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSearch } from "../contexts/SearchContext";


const Cards = () => {
    const [cards, setCards] = useState<CardType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>();

    const { searchTerm } = useSearch();

    const url = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

    const getCards = () => axios.get(url);

    useEffect(() => {
        setError(null);
        setLoading(true);
        getCards()
            .then((res) => {
                setCards(res.data);
                setError(null);
            })
            .catch(() => {
                setError("Network error");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="h-full bg-gray-400 dark:bg-gray-600 flex flex-row flex-wrap justify-center items-center">
            {loading && < ClipLoader color="rgba(54, 215, 183, 1)" />}
            {error && <div>{error}</div>}

            {filteredCards.map((c) => (
                <Link
                    to={`cards/${c._id}`}
                    key={c._id}
                    className="bg-gray-600 dark:bg-gray-800 flex flex-col justify-center items-center shadow-2xl p-5 w-96 h-90 mx-5 rounded-md mt-10 text-center"
                >

                    <h2 className="text-3xl text-black dark:text-white">{c.title}</h2>
                    <hr />
                    <p className="text-1xl text-black dark:text-white mt-2">{c.subtitle}</p>

                    <img className="w-70 h-60 mt-2" src={c.image.url} alt={c.image.alt} />

                </Link>
            ))}
        </div>
    );
};

export default Cards;
