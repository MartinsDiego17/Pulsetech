import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { closeSession } from "../../functions/user/closeSession";
import { navigate } from "astro:transitions/client";

interface PropsConfig {
  title: string
  subtitle: string
  button_cancel: string
  button_confirm: string
}

export default function App({ content }: { content: PropsConfig }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { title, subtitle, button_cancel, button_confirm } = content;

  const handleClose = (fn_close: any) => {
    fn_close();
    closeSession();
    navigate("/");
  };

  return (
    <>
      <Button onPress={onOpen} variant="flat" color="danger" className="modal-close rounded-[5px] text-[1.2rem] py-[2vw] px-[4vw] my-auto">{title}</Button>
      <Modal className="dark" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-[#ddd] text-center mt-[2vw] flex flex-col gap-1">{subtitle}</ModalHeader>
              <ModalBody>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {button_cancel}
                </Button>
                <Button color="primary" onPress={() => handleClose(onClose)}>
                  {button_confirm}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
