import { Button, Spinner } from "@nextui-org/react";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { useEffect, useState } from "react";

const Success = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const returnHome = () => {
        navigate("/");
    }

    return (
        <>
            <div
                className="w-[35%] h-[65vh] flex flex-col place-items-center justify-center p-[5vh] rounded-[10px] bg-[#181818]"
            >
                {
                    !loading ?
                        <div className="pb-[10%]">
                            <h1 className="mb-[3vh] text-[1.2rem] flex place-items-center justify-center gap-x-2 text-primary">
                                <span>Te haz registrado con éxito</span>
                                <i className="text-primary fa-regular fa-circle-check"></i>
                            </h1>
                            <Button onClick={returnHome} className="w-full bg-[#222] text-white rounded-[2px]">Ir a la página inicial</Button>
                        </div>
                        : <Spinner color="success" />
                }

            </div>
        </>
    )
}

export default Success
