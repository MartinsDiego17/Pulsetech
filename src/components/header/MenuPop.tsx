import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { getDataUser } from "../../functions/user/getDataUser";
import ModalClose from "../login/ModalClose";

interface MenuPopProps {
  content: {
    login: string;
    meet: string;
    language: string;
    spanish: string;
    english: string;
    theme: string;
    unLoggin: string;
  };
  content_modal: {
    title: string
    subtitle: string
    button_cancel: string
    button_confirm: string
  }
}


const MenuPop: React.FC<MenuPopProps> = ({ content, content_modal }) => {

  const [disabled, setDisabled] = useState({
    es: true,
    en: false
  });

/*   const [currentLogin, setCurrentLogin] = useState(getDataUser().isLoggin);
 */
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

  const handleLanguage = (language: string) => {
    const currentPath = window.location.pathname;

    if (language === "en" && !currentPath.startsWith("/en")) {
      navigate(`/en${currentPath}`);
    } else {
      navigate(language);
    }
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
        <div className="content-menupop text-[#ccc] py-[.5vw] w-full flex flex-col">

{/*           {
            !currentLogin &&
            <a href="/login">
              <p className="mx-[.5vw] text-[.8rem] 2xl:text-[1rem] hover:bg-[#222] cursor-pointer p-[.5vw] my-[.4vw] rounded-md">
                {content.login}
              </p>
            </a>
          } */}

{/*           <a href="/meet">
            <p className="mx-[.5vw] text-[.8rem] 2xl:text-[1rem] hover:bg-[#222] cursor-pointer p-[.5vw] my-[.4vw] rounded-md">
              {content.meet}
            </p>
          </a> */}

          <div>
            <p className="mx-[.5vw] text-[.8rem] 2xl:text-[1rem] p-[.5vw] my-[.4vw] mb-[0] rounded-md">
              {content.language} <i className="pl-[.5vw] text-primary fa-solid fa-earth-americas"></i>
            </p>
            <button
              onClick={() => handleLanguage("/")}
              disabled={disabled.es}
              className="disabled:opacity-50 disabled:cursor-default disabled:hover:bg-transparent w-[95%] text-left mx-[.5vw] text-[.65rem] 2xl:text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] rounded-md"
            >
              {content.spanish}
            </button> <br />
            <button
              onClick={() => handleLanguage("en")}
              disabled={disabled.en}
              className="disabled:opacity-50 disabled:cursor-default disabled:hover:bg-transparent w-[95%] text-left mx-[.5vw] text-[.65rem] 2xl:text-[.8rem] hover:bg-[#222] cursor-pointer p-[.5vw] rounded-md"
            >
              {content.english}
            </button>
          </div>

{/*           <hr className="w-full mt-[1vw] border-[#333]" />
 */}
{/*           <div className="flex place-items-center justify-center mt-[2%]">
            {
              currentLogin &&
              <ModalClose content={content_modal} />
            }
          </div> */}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MenuPop;
