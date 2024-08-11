import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { sendMeet } from "../../functions/meet/SendMeet";
import { useState } from "react";
import { navigate } from "astro:transitions/client";

interface Props {
    confirm_button: string;
    handleFields: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    dataMeet: {
        date: string,
        hour: string,
        userName: string,
        phone_number: string,
        description: string,
        isActive: boolean
    }
    disabled: boolean
    success: boolean
    setSuccess: (arg: any) => void;
    failure: boolean
    setFailure: (arg: any) => void
}

export default function App({
    confirm_button,
    handleFields,
    dataMeet,
    disabled,
    success,
    setSuccess,
    failure,
    setFailure
}: Props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleSubmit = (close: any) => {
        const response = sendMeet(dataMeet);
        if (response) setSuccess(true);
        else setFailure(true);
    };
    const localDisabled = () => {
        const { userName, phone_number } = dataMeet;
        if (!userName.length || !phone_number.length) return true;
        else return false;
    }
    const navigateHome = () => {
        navigate("/")
    }

    return (
        <>
            <Button
                isDisabled={disabled}
                className="lg:w-full lg:mt-[4vh] text-[#eee] hover:bg-[#08c199] hover:text-black hover:border-[transparent] transition duration-150 w-[60%] mx-auto bg-transparent rounded-[5px] mt-[2vw] border border-[#555]"
                onPress={onOpen}>
                {confirm_button}
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {!success && "Ingresa tu información"}
                            </ModalHeader>
                            <ModalBody>
                                {!success ? (
                                    <>
                                        <Input
                                            name="userName"
                                            value={dataMeet.userName}
                                            onChange={handleFields}
                                            type="text"
                                            label="Nombre de empresa o usuario"
                                        />
                                        <Input
                                            name="phone_number"
                                            value={dataMeet.phone_number}
                                            onChange={handleFields}
                                            type="text"
                                            label="Número telefónico"
                                        />
                                        <Textarea
                                            name="description"
                                            value={dataMeet.description}
                                            variant={"underlined"}
                                            label="Descripción (opcional)"
                                            onChange={handleFields}
                                            labelPlacement="outside"
                                            placeholder="Ingresa una breve descripción de tu proyecto"
                                            className="col-span-12 md:col-span-6 mb-6 md:mb-0 mt-[10%]"
                                        />
                                    </>
                                ) : (
                                    <div className="flex flex-col justify-center">
                                        <h1 className="text-center text-[1.5rem] text-[#045045] font-semibold">
                                            <span>Reunión coordinada con éxito</span>
                                            <span> <i className="mr-[5%] text-[1.2rem] fa-solid fa-check" /></span>
                                        </h1>
                                        <p className="mt-[1vw] text-center text-[.8rem] text-[#333]">
                                            Durante las 24hs previas a la reunión te enviaremos un mensaje para que puedas confirmar tu asistencia a la misma.
                                        </p>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter className="justify-center">
                                <Button className={`${success && "hidden"}`} color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button className={`${success && "hidden"}`} isDisabled={localDisabled()} color="primary" onPress={() => handleSubmit(onClose)}>
                                    Confirmar
                                </Button>
                                <Button onClick={navigateHome} className={`${!success && "hidden"} px-[2vw] rounded-full mt-[3vw] py-[1vw]`}>Volver a la página principal</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
