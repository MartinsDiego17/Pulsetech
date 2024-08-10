
import { DatePicker, Button, Select, SelectItem } from "@nextui-org/react";
import "@fortawesome/fontawesome-free/css/all.css";
import background from "../../../public/images/body/bg2.jpg";
import { useState } from "react";
import ModalMeet from "./ModalMeet";

interface MeetConfig {
    title: string
    text: string
    confirm_button: string
    back_button: string
    message_button: string
}

const hours: string[] = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
]

const Meet = ({ content }: { content: MeetConfig }) => {

    const { title, text, confirm_button, back_button, message_button } = content;
    const [dataMeet, setDataMeet] = useState({
        date: "",
        hour: "",
        userName: "",
        phone_number: "",
        description: "",
        isActive: true
    })

    const handleDate = (e: any) => {
        const { day, month, year } = e;
        const info_date = [day, month, year];
        const select_date: string = info_date.join("/");
        setDataMeet({
            ...dataMeet,
            date: select_date
        })
    };

    const handleHour = (e: any) => {
        setDataMeet({
            ...dataMeet,
            hour: e.target.value
        })
    }

    const handleFields = (e: any) => {
        const { name, value } = e.target;
        setDataMeet({
            ...dataMeet,
            [name]: value
        })
    }

    const validateDisabled = () => {
        const { date, hour } = dataMeet;
        if (!date.length || !hour.length) return true;
        else return false;
    };

    return (
        <article className="lg:max-h-[100vh] main-meet w-screen h-screen pt-[5vh] flex flex-col justify-center place-items-center">
            <section className="relative w-4/5 justify-between h-[80vh] flex">

                <article className="lg:w-full lg:leading-[2] text-white flex flex-col py-[5vh] justify-start place-items-center h-full w-1/2">
                    <h2 className="font-bold text-[1.5rem]">{title}</h2>
                    <p className="leading-none mt-[2%] lg:mt-0 text-[.9rem] text-[#ccc] text-center">
                        {text}
                    </p>
                    <div className="w-3/5 flex justify-between mx-auto">
                        <DatePicker
                            onChange={handleDate}
                            className="lg:mt-[7vw] w-[65%] mt-[2vw]"
                        />
                        <Select
                            className="max-w-[30%]"
                            placeholder="Horario"
                            onChange={handleHour}
                        >
                            {
                                hours?.map(hour => (
                                    <SelectItem key={hour}>{hour}</SelectItem>
                                ))
                            }
                        </Select>
                    </div>
                    <ModalMeet
                        confirm_button={confirm_button}
                        handleFields={handleFields}
                        dataMeet={dataMeet}
                        disabled={validateDisabled()}
                    />
                    <a href="/" className="w-[60%] lg:w-full mt-[1vw]">
                        <Button
                            className="lg:mt-[1.5vh] text-[#eee] hover:bg-[#08c199] hover:text-black hover:border-[transparent] transition duration-150 w-full mx-auto bg-transparent rounded-[5px]  border border-[#555]">
                            {back_button}
                        </Button>
                    </a>

                    <Button
                        className="text-primary opacity-80 hover:opacity-100 transition duration-150 w-fit mx-auto bg-transparent rounded-[5px] text-tiny mt-auto"
                    >{message_button} <i className="fa-solid fa-arrow-trend-up"></i></Button
                    >
                </article>

                <article className="lg:hidden w-1/2 flex justify-end">
                    <div className="relative right-meet h-full w-full">
                        <img className="h-full w-[100%] object-cover" src={background.src} />
                    </div>
                </article>

            </section>
        </article>
    )
}

export default Meet
