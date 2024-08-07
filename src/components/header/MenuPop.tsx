import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Switch, Button } from "@nextui-org/react";

const MenuPop = () => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <button className="outline-none">
          <li className="text-[.8rem] text-white">
            <i className="fa-solid fa-gear"></i>
          </li>
        </button>
      </PopoverTrigger>
      <PopoverContent className="border border-[#222] px-0 w-[20vw] flex dark">
        <div className="text-[#ccc] py-[.5vw] w-full flex flex-col">
          <p className="mx-[.5vw] text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] my-[.4vw] rounded-md">Iniciar sesión</p>
          <p className="mx-[.5vw] text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] my-[.4vw] rounded-md">Registrarse</p>
          <hr className="w-[20vw] mt-[1vw] border-[#333]" />
          <div className="px-[.5vw] mt-[1vw] w-full flex justify-between place-items-center">
            <p className="text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] my-[.4vw] rounded-md">Tema oscuro</p>
            <Switch defaultSelected aria-label="Automatic updates" />
          </div>
          <Button color="danger" variant="flat" className="w-[19vw] mx-auto h-fit py-[.4vw] mt-[1vw]">Cerrar sesión</Button>
        </div>

      </PopoverContent>
    </Popover>
  );
}

export default MenuPop;