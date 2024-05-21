import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";
import { BsEye, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.scss'



const Register = () => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterUser>({
    });
    const [showPassword, setShowPassword] = useState(false);
    const onRegister = (data: RegisterUser) => {
        auth
            .register(data)
            .then((res) => {
                localStorage.setItem("user_id", res.data._id);

                toast.success("Registration Success!", { position: "top-center", autoClose: 2000 });

                setTimeout(() => {
                    navigate("/login");
                }, 2500);
            })
            .catch((e) => {
                console.error(e);
                toast.error("Registration failed");
            });

    };
    return (
        <>
            <h1 className="flex justify-center text-blue-600 text-3xl mt-10">Register</h1>
            <div className="flex justify-center mt-5">
                <ToastContainer />
                <form noValidate onSubmit={handleSubmit(onRegister)}>
                    {/* firstName */}
                    <section>
                        <input
                            placeholder="First Name"
                            type="text"
                            {...register("name.first", {
                                required: "This field is mandatory",
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
                            })}
                        />
                        {errors.name?.last && (
                            <p className="text-red-500">{errors.name?.first?.message}</p>
                        )}
                    </section>

                    {/* middle */}
                    <section>
                        <input
                            placeholder="Middle Name"
                            type="text"
                            {...register("name.middle", {
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
                            })}
                        />
                        {errors.name?.middle && (
                            <p className="text-red-500">{errors.name?.middle?.message}</p>
                        )}
                    </section>

                    {/* last */}
                    <section>
                        <input
                            placeholder="Last Name"
                            type="text"
                            {...register("name.last", {
                                required: "This field is mandatory",
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
                            })}
                        />
                        {errors.name?.last && (
                            <p className="text-red-500">{errors.name?.last?.message}</p>
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

                    {/* password */}
                    <section>
                        <div className="password-container">
                            <input
                                placeholder="Password"
                                type={showPassword ? `text` : `password`}
                                {...register("password", {
                                    required: "This field is mandatory",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-]).{7,20}/,
                                        message:
                                            "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
                                    },
                                })}
                            />
                            <button className="ml-2"
                                type="button"
                                onClick={() => {
                                    setShowPassword((s) => !s);
                                }}
                            >
                                {showPassword ? <BsEyeSlashFill /> : <BsEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500">{errors.password?.message}</p>
                        )}
                    </section>

                    {/* image.url */}
                    <section>
                        <input
                            placeholder="Image URL"
                            type="url"
                            {...register("image.url", {
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
                            placeholder="Image Description"
                            type="text"
                            {...register("image.alt", {
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
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
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
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
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
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
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
                                minLength: { value: 2, message: "Too short" },
                                maxLength: { value: 256, message: "Too long" },
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
                                min: { value: 2, message: "Too small" },
                                max: { value: 256, message: "Too big" },
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
                                required: "This field is mandatory",
                                min: { value: 2, message: "Too small" },
                                //TODO: not the number is big...
                                max: { value: 256, message: "Too big" },
                            })}
                        />
                        {errors.address?.zip && (
                            <p className="text-red-500">{errors.address?.zip?.message}</p>
                        )}
                    </section>

                    {/* isBusiness */}
                    <section className="checkbox-container">
                        <label htmlFor="isBusiness">Business</label>
                        <input className="mb-2" id="isBusiness" type="checkbox" {...register("isBusiness")} />
                        {errors.isBusiness && (
                            <p className="text-red-500">{errors.isBusiness?.message}</p>
                        )}
                    </section>
                    <button id="form-register-button" type="submit" className="bg-blue-400 border border-black rounded-md my-5">Register</button>
                </form>

                {/* <DevTool control={control} /> */}
            </div>
        </>
    );
};

export default Register

