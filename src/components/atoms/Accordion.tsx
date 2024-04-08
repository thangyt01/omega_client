import { FC } from 'react';
import {
  Accordion as NextUIAccordion,
  AccordionProps as NextUIAccordionProps,
} from '@nextui-org/react';

export type AccordionProps = NextUIAccordionProps;

const Accordion: FC<AccordionProps> = (props: AccordionProps) => {
  return <NextUIAccordion {...props} />;
};

export default Accordion;
