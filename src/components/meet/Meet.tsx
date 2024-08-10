
import { DatePicker, Button } from "@nextui-org/react";
import "@fortawesome/fontawesome-free/css/all.css";
import background from "../../../public/images/body/bg2.jpg";

const Meet = () => {
    return (
        <article className="main-meet w-screen h-screen pt-[5vh] flex flex-col justify-center place-items-center">
            <section className="relative w-4/5 justify-between h-[80vh] flex">
                <article className="text-white flex flex-col py-[5vh] justify-start place-items-center h-full w-1/2">
                    <h2 className="font-bold text-[1.5rem]">Coordina una reunión</h2>
                    <p className="leading-none mt-[2%] text-[.9rem] text-[#ccc] text-center">
                        Las reuniones se coordinan hasta con <br /> una semana de anticipación
                    </p>
                    <DatePicker className="w-3/5 mt-[2vw]" />
                    <Button
                        className="text-[#eee] hover:bg-[#08c199] hover:text-black hover:border-[transparent] transition duration-150 w-[60%] mx-auto bg-transparent rounded-[5px] mt-[2vw] border border-[#555]"
                    >Confirmar</Button
                    >
                    <Button
                        className="text-[#eee] hover:bg-[#08c199] hover:text-black hover:border-[transparent] transition duration-150 w-[60%] mx-auto bg-transparent rounded-[5px] mt-[1vw] border border-[#555]"
                    >Cancelar</Button
                    >
                    <Button
                        className="text-primary opacity-80 hover:opacity-100 transition duration-150 w-fit mx-auto bg-transparent rounded-[5px] text-tiny mt-auto"
                    >Enviar mensaje directo <i className="fa-solid fa-arrow-trend-up"></i></Button
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
