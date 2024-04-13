import type { AccordionItemProps as NextUIAccordionItemProps } from '@nextui-org/react';
import { AccordionItem as NextUIAccordionItem } from '@nextui-org/react';
import type { FC } from 'react';

export type AccordionItemProps = NextUIAccordionItemProps;

const AccordionItem: FC<AccordionItemProps> = (props: AccordionItemProps) => {
  return <NextUIAccordionItem {...props} />;
};

export default AccordionItem;
