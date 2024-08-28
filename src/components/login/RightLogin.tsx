import { Button, Spinner } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { navigate } from "astro:transitions/client";
import { getDataUser } from "../../functions/user/getDataUser";
import ModalClose from "./ModalClose";
import { validateUser } from "../../functions/login/validateUser";

interface ContentProps {
    title: string
    paragraph: string
    label_email: string
    label_password: string
    error_login: string,
    not_register_text: string
    not_register_button: string
    button_loggin: string
    or: string
    button_google: string
    button_facebook: string
}
interface ContentModalProps {
    title: string
    subtitle: string
    button_cancel: string
    button_confirm: string
}
interface PropsConfig {
    content: ContentProps
    content_modal: ContentModalProps
}

const RightLogin = ({ content, content_modal }: PropsConfig) => {

    const {
        title,
        paragraph,
        label_email,
        label_password,
        error_login,
        not_register_text,
        not_register_button,
        button_loggin,
        or,
        button_google,
        button_facebook
    } = content;

    const [dataLogin, setDataLogin] = useState({
        id: 0,
        email: "",
        password: ""
    })
    const [currentLogin, setCurrentLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setDataLogin({
            ...dataLogin,
            [name]: value
        });
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!dataLogin.email.length || !dataLogin.password.length) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        const response = await validateUser(dataLogin);
        if (!response) {
            setError(true);
        } else {
            setError(false);
            navigate("/");
        }
    };
    const handleRegister = () => {
        navigate("/register");
    }

    useEffect(() => {
        setCurrentLogin(getDataUser()?.isLoggin);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [currentLogin, setCurrentLogin]);

    return (
        <>
            {
                !currentLogin && !loading &&
                <article
                    className="justify-center lg:leading-[1.3] lg:w-4/5 lg:mx-auto w-[35%] h-screen px-[4.5vw] flex flex-col  pt-[4vw] place-items-center"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col place-items-start justify-start w-full h-[70vh]"
                    >
                        <h2 className="2xl:text-[2.5rem] lg:text-[1.5rem] text-[#eee] text-[2rem]">
                            {title}
                        </h2>
                        <p className="text-[#aaa] 2xl:text-[1rem] text-tiny">{paragraph}</p>
                        <div className="mt-[5%] w-full">
                            <label htmlFor="email" className="2xl:text-[1rem] text-tiny text-[#ccc]"
                            >{label_email}</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="2xl:text-[1rem] lg:py-[1.5vw] transition duration-150 shadow-class border-2 border-[#444] w-full mx-auto my-[1vw] lg:my-[1.5vh] bg-[#252525] rounded-[4px] px-[1vw] text-[#ccc] text-tiny py-[.7vw] outline-none"
                                autoComplete="off"
                                onChange={handleChange}
                            />

                            <label htmlFor="password" className="2xl:text-[1rem] text-tiny text-[#ccc]"
                            >{label_password}</label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="2xl:text-[1rem] lg:py-[1.5vw] transition duration-150 shadow-class border-2 border-[#444] w-full mx-auto my-[1vw] lg:my-[1.5vh] bg-[#252525] rounded-[4px] px-[1vw] text-[#ccc] text-tiny py-[.7vw] outline-none"
                                autoComplete="off"
                                onChange={handleChange}
                            />

                            <div className="mb-[4%]">
                                <p className="2xl:text-[.9rem] flex gap-x-2 text-[#ccc] text-[.65rem]">
                                    <span>{not_register_text}</span>
                                    <div onClick={handleRegister}><span className=" cursor-pointer text-primary">{not_register_button}</span></div>
                                </p>
                            </div>

                            {
                                error && <p className="text-[#ff5757] text-[.7rem]">{error_login}</p>
                            }

                            <button className="w-full">
                                <Button
                                    className="2xl:text-[1rem] 2xl:py-[2.5vh] lg:mt-[5%] w-full mx-auto rounded-[4px] bg-semidark text-white font-semibold mt-[1vw]"
                                >{button_loggin}
                                </Button>
                            </button>

                        </div>
                    </form>
                </article>
            }
            {
                currentLogin && !loading &&
                <article
                    className="lg:justify-center lg:leading-[1.3] lg:w-4/5 lg:mx-auto w-[35%] h-screen px-[4.5vw] flex flex-col justify-start pt-[4vw] place-items-center pb-[15%]"
                >
                    <ModalClose content={content_modal} />
                </article>
            }
            {
                loading &&
                <article
                    className="lg:justify-center lg:leading-[1.3] lg:w-4/5 lg:mx-auto w-[35%] h-screen px-[4.5vw] flex flex-col justify-start pt-[4vw] place-items-center pb-[15%]"
                >
                    <Spinner size="lg" className="my-auto" color="success" />
                </article>
            }
        </>
    )
}

export default RightLogin
