import { getI18N } from "../lenguajes";

interface LayoutConfig {
    title: string;
}

interface NavbarConfig {
    elements: string[]
    popover_elements: {
        login: string;
        meet: string
        language: string
        spanish: string
        english: string
        theme: string;
        unLoggin: string
    }
}

interface HomeConfig {
    paragraph: string;
    first_text: string;
    second_text: string;
    second_paragraph: string;
    button_text: string;
}

interface TypepagesConfig {
    title: string
    first_type: {
        type: string
        checklist: string[]
    }
    second_type: {
        type: string
        checklist: string[]
    }
    third_type: {
        type: string
        checklist: string[]
    }
}

interface BenefitsConfig {
    title: string
    first_benefit: {
        benefit: string
        text: string
    }
    second_benefit: {
        benefit: string
        text: string
    }
    third_benefit: {
        benefit: string
        text: string
    }
}

interface ProfessionalsConfig {
    title: string
}

interface GoworkConfig {
    title: string
    first_button: string
    second_button: string
}

interface FooterConfig {
    categories: {
        title: string
        sections: string[]
    }
    contact: {
        title: string
    }
    follow: {
        title: string
    }
}

interface MeetConfig {
    title: string
    text: string
    confirm_button: string
    back_button: string
    message_button: string
    modal: {
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

interface LoginConfig {
    title_layout: string
    title: string
    paragraph: string
    label_email: string
    not_register_text: string
    not_register_button: string
    label_password: string
    error_login: string
    button_loggin: string
    or: string
    button_google: string
    button_facebook: string
}

interface RegisterConfig {
    title_layout: string
    title: string
    label_email: string
    label_password: string
    placeholder_password: string
    button_confirm: string
    error_msj: string
}

interface ModalcloseConfig {
    title: string
    subtitle: string
    button_cancel: string
    button_confirm: string
}

interface FaqConfig {
    title: string;
    contents: {
        title: string;
        ariaLabel: string;
        content: string;
    }[];
}

interface WorksConfig {
    title: string
    text: string
    list_works: {
        title: string
        date: string
        link: string
    }[]
    button_site: string
}

export const getContents = (current: any) => {
    const i18n = getI18N({ currentLocale: current });

    const layout: LayoutConfig = i18n.layout;
    const navbar: NavbarConfig = i18n.nav_bar;
    const home: HomeConfig = i18n.home;
    const type_pages: TypepagesConfig = i18n.type_pages;
    const benefits: BenefitsConfig = i18n.benefits;
    const professionals: ProfessionalsConfig = i18n.professionals;
    const go_work: GoworkConfig = i18n.go_work;
    const footer: FooterConfig = i18n.footer;
    const meet: MeetConfig = i18n.meet;
    const login: LoginConfig = i18n.login;
    const register: RegisterConfig = i18n.register;
    const modal_close: ModalcloseConfig = i18n.modal_close;
    const faq: FaqConfig = i18n.faq;
    const works: WorksConfig = i18n.works;

    return {
        layout,
        navbar,
        home,
        type_pages,
        benefits,
        professionals,
        go_work,
        footer,
        meet,
        login,
        register,
        modal_close,
        faq,
        works
    }
};
