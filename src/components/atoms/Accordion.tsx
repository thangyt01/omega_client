import type { AccordionProps as NextUIAccordionProps } from '@nextui-org/react';
import { Accordion as NextUIAccordion } from '@nextui-org/react';
import type { FC } from 'react';

export type AccordionProps = NextUIAccordionProps;

const Accordion: FC<AccordionProps> = (props: AccordionProps) => {
  return <NextUIAccordion {...props} />;
};

export default Accordion;
