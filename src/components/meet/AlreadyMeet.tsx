import { Button } from "@nextui-org/react";
import { navigate } from "astro:transitions/client";

interface CurrentMeet {
    date: string,
    hour: string,
    userName: string,
    phoneNumber: string,
    description: string,
    isActive: boolean
    userId: number
}

const AlreadyMeet = ({ currentMeet }: { currentMeet: CurrentMeet }) => {

    const { date, hour, userName, phoneNumber, description, isActive, userId } = currentMeet;

    return (
        <div className="lg:justify-center lg:pb-[20vh] max-h-screen lg:w-full lg:leading-[2] text-white flex flex-col py-[5vh] justify-start place-items-center h-full w-1/2">
            <h2 className="w-[60%] lg:w-4/5 text-balance text-center font-semibold text-[#ddd]">Ya tienes una reunión reservada para el día {date} a las {hour}hs.</h2>
            <p className="text-[.95rem] lg:w-4/5 text-balance text-center w-[60%] mt-[5%] text-[#ccc] font-light">Te envíaremos un mensaje al número <span className="text-white">{phoneNumber}</span> a lo largo de las 24 horas previas a la reunión para confirmar tu asistencia.</p>


            <article className={`main-meet lg:w-full lg:leading-[2] text-white flex flex-col justify-center place-items-center mt-[5%] w-1/2`}>
                <Button onClick={() => { navigate("/") }} className="bg-primary px-[3vw] lg:px-[3vh] lg:py-[3vh] rounded-full py-[2vw]">Volver a la página principal</Button>
            </article>
        </div>
    )
}

export default AlreadyMeet
