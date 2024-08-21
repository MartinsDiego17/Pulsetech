import { Button } from "@nextui-org/react"

interface PropsConfig {
    title: string
    paragraph: string
    label_email: string
    not_register_text: string
    not_register_button: string
    button_loggin: string
    or: string
    button_google: string
    button_facebook: string
}

const RightLogin = ({
    title,
    paragraph,
    label_email,
    not_register_text,
    not_register_button,
    button_loggin,
    or,
    button_google,
    button_facebook
} :  PropsConfig) => {
    return (
        <article
            className="lg:justify-center lg:leading-[1.3] lg:w-4/5 lg:mx-auto w-[35%] h-screen px-[4.5vw] flex flex-col justify-start pt-[4vw] place-items-center"
        >
            <form
                className="flex flex-col place-items-start justify-start w-full h-[70vh]"
            >
                <h2 className="lg:text-[1.5rem] text-[#eee] text-[2rem]">
                    {title}
                </h2>
                <p className="text-[#aaa] text-tiny">{paragraph}</p>
                <div className="mt-[5%] w-full">
                    <label htmlFor="email" className="text-tiny text-[#ccc]"
                    >{label_email}</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="lg:py-[1.5vw] transition duration-150 shadow-class border-2 border-[#444] w-full mx-auto my-[1vw] lg:my-[1.5vh] bg-[#252525] rounded-[4px] px-[1vw] text-[#ccc] text-tiny py-[.7vw] outline-none"
                        autoComplete="off"
                    />

                    <div className="mb-[4%]">
                        <p className="text-[#ccc] text-[.65rem]">
                            <span>{not_register_text}</span>
                            <span><button className="text-primary">{not_register_button}</button></span>
                        </p>
                    </div>

                    <Button
                        className="lg:mt-[5%] w-full mx-auto rounded-[4px] bg-semidark text-white font-semibold mt-[1vw]"
                    >{button_loggin}
                    </Button>

                    <div className="my-[5vh] flex justify-between items-center">
                        <hr className="flex-1 border-0 border-t border-[#333]" />
                        <span className="mx-2 text-[#ccc]">{or}</span>
                        <hr className="flex-1 border-0 border-t border-[#333]" />
                    </div>

                    <Button
                        className="w-full my-[1vw] rounded-[4px] bg-[#222] text-[#ccc] font-semibold "
                    >
                        {button_google}
                        <i className="fa-brands fa-google"></i>
                    </Button>
                    <Button
                        className="w-full my-[.5vw] lg:my-[2vh] rounded-[4px] bg-[#222] text-[#ccc] font-semibold "
                    >{button_facebook}
                        <i className="fa-brands fa-facebook"></i></Button>
                </div>
            </form>
        </article>
    )
}

export default RightLogin
