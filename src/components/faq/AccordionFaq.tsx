import { Accordion, AccordionItem } from "@nextui-org/react";

interface Contents {
  title: string;
  ariaLabel: string;
  content: string;
}[];

export const AccordionFaq = ({ content }: { content: any }) => {
  return (
    <Accordion className="dark w-[65%] lg:w-full">

      {
        content.map((faqItem: any, index: number) => (
          <AccordionItem className="text-tiny text-[#aaa]" key={index} aria-label={faqItem.ariaLabel} title={faqItem.title}>
            {faqItem.content}
          </AccordionItem>
        ))
      }

    </Accordion>
  );
}
