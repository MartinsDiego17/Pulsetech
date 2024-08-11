import { getI18N } from "../lenguajes";

interface LayoutConfig {
    title: string;
}

interface NavbarConfig {
    elements: string[]
    popover_elements: {
        meet: string
        language: string
        spanish: string
        english: string
        theme: string
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

    return {
        layout,
        navbar,
        home,
        type_pages,
        benefits,
        professionals,
        go_work,
        footer,
        meet
    }
};
