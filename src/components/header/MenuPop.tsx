import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Switch } from "@nextui-org/react";
import { navigate } from "astro/virtual-modules/transitions-router.js";

interface MenuPopProps {
  content: {
    meet: string;
    language: string;
    spanish: string;
    english: string;
    theme: string;
  };
}

const MenuPop: React.FC<MenuPopProps> = ({ content }) => {

  const [disabled, setDisabled] = useState({
    es: true,
    en: false
  })

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLocale = currentPath.startsWith('/en') ? 'en' : '/';
    if (currentLocale === "/") setDisabled({
      es: true,
      en: false
    })
    else if (currentLocale === "en") {
      setDisabled({
        es: false,
        en: true
      })
    }
  }, []);

  const handleLanguage = (event: (React.MouseEvent<HTMLButtonElement> | undefined | any), language: string) => {
    navigate(language);
    return;
  };

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <button className="outline-none">
          <li className="text-[.8rem] text-white">
            <i className="fa-solid fa-gear"></i>
          </li>
        </button>
      </PopoverTrigger>
      <PopoverContent className="lg:leading-[2.5] border border-[#222] lg:w-[70vw] lg:px-[10px] px-0 w-[20vw] flex dark">
        <div className="text-[#ccc] py-[.5vw] w-full flex flex-col">
          <a href="/meet">
            <p className="mx-[.5vw] text-[.8rem] 2xl:text-[1rem] hover:bg-[#222] cursor-pointer p-[.5vw] my-[.4vw] rounded-md">
              {content.meet}
            </p>
          </a>

          <div>
            <p className="mx-[.5vw] text-[.8rem] 2xl:text-[1rem] p-[.5vw] my-[.4vw] mb-[0] rounded-md">
              {content.language} <i className="pl-[.5vw] text-primary fa-solid fa-earth-americas"></i>
            </p>
            <button
              onClick={() => handleLanguage(event, "/")}
              disabled={disabled.es}
              className="disabled:opacity-50 disabled:cursor-default disabled:hover:bg-transparent w-[95%] text-left mx-[.5vw] text-[.65rem] 2xl:text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] rounded-md"
            >
              {content.spanish}
            </button> <br />
            <button
              onClick={() => handleLanguage(event, "en")}
              disabled={disabled.en}
              className="disabled:opacity-50 disabled:cursor-default disabled:hover:bg-transparent w-[95%] text-left mx-[.5vw] text-[.65rem] 2xl:text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] rounded-md"
            >
              {content.english}
            </button>
          </div>

          <hr className="w-full mt-[1vw] border-[#333]" />

          <div className="px-[.5vw] mt-[1vw] w-full flex justify-between place-items-center">
            <p className="2xl:text-[1rem] text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] my-[.4vw] rounded-md">
              {content.theme}
            </p>
            <Switch id="switcher" defaultSelected aria-label="Automatic updates" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MenuPop;
