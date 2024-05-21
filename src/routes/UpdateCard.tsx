import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardType, UpadateCardType } from "../@types/types";
import axios from "axios";
import './UpdateCard.scss'


const UpdateCard = () => {

    const { id } = useParams();
    const url = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`;

    const updateCard = (data: CardType) => axios.put(url, data, {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    });

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpadateCardType>({
        defaultValues: async () => {
            const res = await fetch(url);
            const data = await res.json();
            const updateData = {
                title: data.title,
                subtitle: data.subtitle,
                description: data.description,
                phone: data.phone,
                email: data.email,
                web: data.web,
                image: {
                    url: data.image.url,
                    alt: data.image.alt,
                },
                address: {
                    state: data.address.state,
                    country: data.address.country,
                    city: data.address.city,
                    street: data.address.street,
                    houseNumber: data.address.houseNumber,
                    zip: data.address.zip,
                }
            }
            return updateData;
        },
    });

    const onSubmit = (formData: CardType) => {

        updateCard(formData)
            .then(() => {
                toast.success("Card Update Success!", { position: "top-center", autoClose: 2000 });

                setTimeout(() => {
                    navigate("/");
                }, 2500);
            })
            .catch((error) => {
                console.error("Error update card:", error);
                toast.error("Failed to update card", { position: "top-center", autoClose: 2000 });
            });
    }

    return (
        <>
            <h1 className="flex justify-center text-blue-600 text-3xl mt-10">UPDATE CARD</h1>
            <div className="divForm flex justify-center mt-5">
                <ToastContainer />
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    {/* title */}
                    <section>
                        <input
                            placeholder="Title"
                            type="text"
                            {...register("title", {
                                required: "This field is mandatory",
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
                            })}
                        />
                        {errors.title && (
                            <p className="text-red-500">{errors.title?.message}</p>
                        )}
                    </section>

                    {/* subtitle */}
                    <section>
                        <input
                            placeholder="Subtitle"
                            type="text"
                            {...register("subtitle", {
                                required: "This field is mandatory",
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
                            })}
                        />
                        {errors.subtitle && (
                            <p className="text-red-500">{errors.subtitle?.message}</p>
                        )}
                    </section>

                    {/* description */}
                    <section>
                        <input
                            placeholder="Description"
                            type="text"
                            {...register("description", {
                                required: "This field is mandatory",
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 1024, message: "Too long" },
                            })}
                        />
                        {errors.description && (
                            <p className="text-red-500">{errors.description?.message}</p>
                        )}
                    </section>

                    {/* phone */}
                    <section>
                        <input
                            placeholder="Phone"
                            type="tel"
                            {...register("phone", {
                                required: "This field is mandatory",
                                minLength: { value: 9, message: "Too short" },
                                maxLength: { value: 11, message: "Too long" },
                            })}
                        />
                        {errors.phone && (
                            <p className="text-red-500">{errors.phone?.message}</p>
                        )}
                    </section>

                    {/* email */}
                    <section>
                        <input
                            placeholder="Email"
                            type="email"
                            {...register("email", {
                                required: "This field is mandatory",
                                pattern: {
                                    value: /\S+@gmail\.\S+/,
                                    message: "Invalid email",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email?.message}</p>
                        )}
                    </section>

                    {/* web */}
                    <section>
                        <input
                            placeholder="Web"
                            type="text"
                            {...register("web", {
                                minLength: { value: 14, message: "Too short" },
                            })}
                        />
                        {errors.web && (
                            <p className="text-red-500">{errors.web?.message}</p>
                        )}
                    </section>

                    {/* image.url */}
                    <section>
                        <input
                            placeholder="Image url"
                            type="url"
                            {...register("image.url", {
                                required: "This field is mandatory",
                                pattern: {
                                    value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                                    message: "Invalid image URL",
                                },
                            })}
                        />
                        {errors.image?.url && (
                            <p className="text-red-500">{errors.image?.url?.message}</p>
                        )}
                    </section>

                    {/* image.alt */}
                    <section>
                        <input
                            placeholder="Image alt"
                            type="text"
                            {...register("image.alt", {
                                required: "This field is mandatory",
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
                            })}
                        />
                        {errors.image?.alt && (
                            <p className="text-red-500">{errors.image?.alt?.message}</p>
                        )}
                    </section>

                    {/* address.state */}
                    <section>
                        <input
                            placeholder="State"
                            type="text"
                            {...register("address.state", {
                            })}
                        />
                        {errors.address?.state && (
                            <p className="text-red-500">{errors.address?.state?.message}</p>
                        )}
                    </section>

                    {/* address.country */}
                    <section>
                        <input
                            placeholder="Country"
                            type="text"
                            {...register("address.country", {
                                required: "This field is mandatory",
                            })}
                        />
                        {errors.address?.country && (
                            <p className="text-red-500">{errors.address?.country?.message}</p>
                        )}
                    </section>

                    {/* address.city */}
                    <section>
                        <input
                            placeholder="City"
                            type="text"
                            {...register("address.city", {
                                required: "This field is mandatory",
                            })}
                        />
                        {errors.address?.city && (
                            <p className="text-red-500">{errors.address?.city?.message}</p>
                        )}
                    </section>

                    {/* address.street */}
                    <section>
                        <input
                            placeholder="Street"
                            type="text"
                            {...register("address.street", {
                                required: "This field is mandatory",
                            })}
                        />
                        {errors.address?.street && (
                            <p className="text-red-500">{errors.address?.street?.message}</p>
                        )}
                    </section>

                    {/* address.houseNumber */}
                    <section>
                        <input
                            placeholder="House Number"
                            type="number"
                            {...register("address.houseNumber", {
                                required: "This field is mandatory",
                                min: { value: 1, message: "Too small" },
                            })}
                        />
                        {errors.address?.houseNumber && (
                            <p className="text-red-500">
                                {errors.address?.houseNumber?.message}
                            </p>
                        )}
                    </section>

                    {/* address.zip */}
                    <section>
                        <input
                            placeholder="Zip"
                            type="number"
                            {...register("address.zip", {
                            })}
                        />
                        {errors.address?.zip && (
                            <p className="text-red-500">{errors.address?.zip?.message}</p>
                        )}
                    </section>

                    <button id="form-update-button" type="submit" className="bg-blue-400 border border-black rounded-md my-5">Update Card</button>
                </form>

            </div>
        </>
    );
}

export default UpdateCard