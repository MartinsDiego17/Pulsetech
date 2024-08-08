interface LayoutConfig {
    title: string;
}

interface HomeConfig {
    paragraph: string;
    first_text: string;
    second_text: string;
    second_paragraph: string;
    button_text: string;
}

import { getI18N } from "../lenguajes";
const i18n = getI18N({ currentLocale: "es" });

const layout: LayoutConfig = i18n.layout;
const home: HomeConfig = i18n.home;

export const contents = {
    layout,
    home
}