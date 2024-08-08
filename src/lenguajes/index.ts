import global_en from "./en.json";
import global_es from "./es.json";

const lenguajes = {
    es: "es",
    en: "en"
};

export const getI18N = ({ currentLocale = "es",} : {currentLocale?: string;}) => {
	if (currentLocale === lenguajes.en) return global_en;
	return global_es;
};