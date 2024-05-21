import { useForm } from "react-hook-form";
import { LoginUser } from "../@types/types";
import auth from "../utils/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './Login.scss'

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onLogin = (data: LoginUser) => {
        auth
            .login(data)
            .then((res) => {
                toast.success("Login Success!", { position: "top-center", autoClose: 2000 });
                login(res.data);

                setTimeout(() => {
                    navigate("/");
                }, 2500);
            })
            .catch((e) => {
                e.response.data;
                toast.error("Login failed", { position: "top-center", autoClose: 2000 });
            });
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUser>();

    return (
        <>
            <div className="h-screen">
                <h1 className="flex justify-center text-blue-600 text-3xl mt-36">Login</h1>
                <div className="flex justify-center mt-5">
                    <ToastContainer />
                    <form noValidate onSubmit={handleSubmit(onLogin)}>
                        {/* email */}
                        <section>
                            <input
                                placeholder="Email"
                                autoCapitalize="true"
                                autoCorrect="false"
                                autoComplete="email"
                                type="email"
                                {...register("email", {
                                    required: "This field is mandatory",
                                    pattern: /\S+@gmail\.\S+/,
                                })}
                            />
                            {errors.email && <p>{errors.email?.message}</p>}
                        </section>

                        {/* password */}
                        <section>
                            <input
                                autoComplete="current-password"
                                placeholder="Password"
                                type="password"
                                {...register("password", {
                                    required: "This field is mandatory",
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-]).{9,20}/,
                                })}
                            />
                            {errors.password && <p>{errors.password?.message}</p>}
                        </section>

                        <button id="form-login-button" type="submit" className="bg-blue-400 border border-black rounded-md my-5">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
