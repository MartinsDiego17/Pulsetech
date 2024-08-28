import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea, Button } from "@nextui-org/react";
import { sendMeet } from "../../functions/meet/SendMeet";
import { navigate } from "astro:transitions/client";

interface Props {
    confirm_button: string;
    handleFields: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    dataMeet: {
        date: string,
        hour: string,
        userName: string,
        phoneNumber: string,
        description: string,
        isActive: boolean
        userId: number
    }
    disabled: boolean
    success: boolean
    setSuccess: (arg: any) => void;
    failure: boolean
    setFailure: (arg: any) => void
    content: {
        title_modal: string
        placeholder_username: string
        placeholder_phone: string
        title_description: string
        placeholder_description: string
        button_close: string
        button_confirm: string
        title_success: string
        text_success: string
        button_home: string
    }
}



export default function App({
    confirm_button,
    handleFields,
    dataMeet,
    disabled,
    success,
    setSuccess,
    setFailure,
    content
}: Props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        title_modal,
        placeholder_username,
        placeholder_phone,
        title_description,
        placeholder_description,
        button_close,
        button_confirm,
        title_success,
        text_success,
        button_home
    } = content;

    const handleSubmit = async () => {
        const response = await sendMeet(dataMeet);
        if (response) setSuccess(true);
        else setFailure(true);
    };
    const localDisabled = () => {
        const { userName, phoneNumber } = dataMeet;
        if (!userName.length || !phoneNumber.length) return true;
        else return false;
    }
    const navigateHome = () => {
        navigate("/");
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
                                {!success && title_modal}
                            </ModalHeader>
                            <ModalBody>
                                {!success ? (
                                    <>
                                        <Input
                                            name="userName"
                                            value={dataMeet.userName}
                                            onChange={handleFields}
                                            type="text"
                                            label={placeholder_username}
                                        />
                                        <Input
                                            name="phoneNumber"
                                            value={dataMeet.phoneNumber}
                                            onChange={handleFields}
                                            type="text"
                                            label={placeholder_phone}
                                        />
                                        <Textarea
                                            name="description"
                                            value={dataMeet.description}
                                            variant={"underlined"}
                                            label={title_description}
                                            onChange={handleFields}
                                            labelPlacement="outside"
                                            placeholder={placeholder_description}
                                            className="col-span-12 md:col-span-6 mb-6 md:mb-0 mt-[10%]"
                                        />
                                    </>
                                ) : (
                                    <div className="flex flex-col justify-center">
                                        <h1 className="w-[70%] text-pretty mx-auto text-center text-[1.5rem] text-[#045045] font-semibold">
                                            <span>{title_success}</span>
                                            <span> <i className="mr-[5%] text-[1.2rem] fa-solid fa-check" /></span>
                                        </h1>
                                        <p className="text-balance mt-[1vw] text-center text-[.8rem] text-[#333]">
                                            {text_success}
                                        </p>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter className="justify-center">
                                <Button className={`${success && "hidden"}`} color="danger" variant="light" onPress={onClose}>
                                    {button_close}
                                </Button>
                                <Button className={`${success && "hidden"}`} isDisabled={localDisabled()} color="primary" onPress={() => handleSubmit()}>
                                    {button_confirm}
                                </Button>
                                <Button onClick={navigateHome} className={`${!success && "hidden"} px-[2vw] rounded-full mt-[3vw] py-[1vw]`}>{button_home}</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
