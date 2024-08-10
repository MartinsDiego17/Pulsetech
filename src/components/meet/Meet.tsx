
import { DatePicker, Button } from "@nextui-org/react";
import "@fortawesome/fontawesome-free/css/all.css";
import background from "../../../public/images/body/bg2.jpg";

interface MeetConfig {
    title: string
    text: string
    confirm_button: string
    back_button: string
    message_button: string
}

const Meet = ({ content } : { content: MeetConfig }) => {

    const { title, text, confirm_button, back_button, message_button } = content;

    return (
        <article className="main-meet w-screen h-screen pt-[5vh] flex flex-col justify-center place-items-center">
            <section className="relative w-4/5 justify-between h-[80vh] flex">
                <article className="text-white flex flex-col py-[5vh] justify-start place-items-center h-full w-1/2">
                    <h2 className="font-bold text-[1.5rem]">{title}</h2>
                    <p className="leading-none mt-[2%] text-[.9rem] text-[#ccc] text-center">
                        {text}
                    </p>
                    <DatePicker className="w-3/5 mt-[2vw]" />
                    <Button
                        className="text-[#eee] hover:bg-[#08c199] hover:text-black hover:border-[transparent] transition duration-150 w-[60%] mx-auto bg-transparent rounded-[5px] mt-[2vw] border border-[#555]"
                    >{confirm_button}</Button
                    >
                    <a href="/" className="w-[60%] mt-[1vw]">
                        <Button
                            className="text-[#eee] hover:bg-[#08c199] hover:text-black hover:border-[transparent] transition duration-150 w-full mx-auto bg-transparent rounded-[5px]  border border-[#555]">
                        {back_button}
                        </Button>
                    </a>
                    <Button
                        className="text-primary opacity-80 hover:opacity-100 transition duration-150 w-fit mx-auto bg-transparent rounded-[5px] text-tiny mt-auto"
                    >{message_button} <i className="fa-solid fa-arrow-trend-up"></i></Button
                    >
                </article>
                <article className="w-1/2 flex justify-end">
                    <div className="relative right-meet h-full w-full">
                        <img className="h-full w-[100%] object-cover" src={background.src} />
                    </div>
                </article>
            </section>
        </article>
    )
}

export default Meet
