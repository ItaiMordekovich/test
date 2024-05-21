import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import { DeleteCardType } from "../@types/types";

const Delete: React.FC<DeleteCardType> = (props) => {

    const navigate = useNavigate();

    const url = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${props.id}`;

    const deleteCard = () => axios.delete(url, {
        headers: {
            "x-auth-token": localStorage.getItem("token")
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

    return (
        <div>
            <ToastContainer />

            <button className="text-white" onClick={() => {
                deleteCard()
            }}><RiDeleteBin6Fill className="text-gray-300 dark:text-gray-400 text-2xl mt-4 mr-4" /></button>


        </div>

    );



};

export default Delete;


