import type { AccordionProps as NextUIAccordionProps } from '@nextui-org/react';
import { Accordion as NextUIAccordion } from '@nextui-org/react';

export type AccordionProps = NextUIAccordionProps;

function Accordion(props: AccordionProps): JSX.Element {
  return <NextUIAccordion {...props} />;
}

export default Accordion;
