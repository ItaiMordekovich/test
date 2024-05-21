import { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { FaHeart } from 'react-icons/fa6';

const Like = () => {

    const [liked, setLiked] = useState();
    const { id } = useParams();
    const url = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`;

    const handleLike = async () => {
        try {
            const response = await axios.patch(url, {
                liked: !liked
            });

            const updatedCardData = response.data;

            setLiked(updatedCardData.liked);
        } catch (error) {
            console.error('Error updating card:', error);
        }
    };

    return (
        <button onClick={handleLike}><FaHeart /></button>
    );
};

export default Like;
