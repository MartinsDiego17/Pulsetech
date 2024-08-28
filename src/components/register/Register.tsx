import { Button } from "@nextui-org/react";
import { useState } from "react";
import { createUser } from "../../functions/login/createUser";
import Success from "./Success";
import "@fortawesome/fontawesome-free/css/all.css";
import { addUser } from "../../functions/user/addUser";

interface RegisterConfig {
    title_layout: string
    title: string
    label_email: string
    label_password: string
    placeholder_password: string
    button_confirm: string
    error_msj: string
}


const Register = ({ content } : { content: RegisterConfig }) => {
    const { title, label_email, label_password, placeholder_password, button_confirm, error_msj } = content;

    const [dataUser, setDataUser] = useState({
        email: "",
        password: ""
    });

    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setDataUser({
            ...dataUser,
            [name]: value
        });
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!dataUser.email.length || !dataUser.password.length) return;
        const response = await createUser(dataUser);
        if (response.id) {
            setSuccess(true);
            setFailure(false);
            addUser(response);
        } else if (response.error) {
            setSuccess(false);
            setFailure(true);
        }
    };

    const validationsInputs = () => {
        const { email, password } = dataUser;
        if (!email.length || password.length < 8) return true;
        else return false;
    }

    return (
        <div className="w-screen h-[100vh] flex flex-col justify-center place-items-center pb-[2%]">
            {
                !success &&
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-4/5 lg:h-fit lg:py-[10vh] lg:px-[3.5vh] w-[35%] h-[65vh] flex flex-col place-items-center 2xl:h-fit 2xl:py-[7vh] justify-center p-[5vh] bg-[#181818]"
                >

                    <h2 className="2xl:text-[2.5rem] lg:text-[1rem] w-full text-left text-[#eee] text-[2rem]">
                        {title}
                    </h2>

                    <div className="mt-[5%] w-full">
                        <label htmlFor="email" className="2xl:text-[1rem] text-tiny text-[#ccc]"
                        >{label_email}</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`${failure && "mb-0 border-[#ff5757]"} 2xl:text-[1rem] lg:py-[1.5vw] transition duration-150 shadow-class border-2 border-[#444] w-full mx-auto my-[1vw] lg:my-[1.5vh] bg-[#252525] rounded-[4px] px-[1vw] text-[#ccc] text-tiny py-[.7vw] outline-none`}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                        <span className={`${!failure && "hidden"} text-[.6rem] text-[#ff5757]`}>{error_msj}</span> <br className={`${!failure && "hidden"}`} />


                        <label htmlFor="password" className="2xl:text-[1rem] text-tiny text-[#ccc]"
                        >{label_password}</label>   

                        <input
                            id="password"
                            name="password"
                            type="password"
                            className=" 2xl:text-[1rem] lg:py-[1.5vw] transition duration-150 shadow-class border-2 border-[#444] w-full mx-auto my-[1vw] lg:my-[1.5vh] bg-[#252525] rounded-[4px] px-[1vw] text-[#ccc] text-tiny py-[.7vw] outline-none"
                            autoComplete="off"
                            placeholder={placeholder_password}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="w-full">
                        <Button
                            isDisabled={validationsInputs()}
                            className="2xl:text-[1rem] 2xl:py-[2.5vh] lg:mt-[5%] w-full mx-auto rounded-[4px] bg-semidark text-white font-semibold mt-[1vw]"
                        >{button_confirm}
                        </Button>
                    </button>

                </form>
            }
            {
                success && <Success />
            }
        </div>
    )
}

export default Register
