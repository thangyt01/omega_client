import { FC } from 'react';
import {
  AccordionItem as NextUIAccordionItem,
  AccordionItemProps as NextUIAccordionItemProps,
} from '@nextui-org/react';

export type AccordionItemProps = NextUIAccordionItemProps;

const AccordionItem: FC<AccordionItemProps> = (props: AccordionItemProps) => {
  return <NextUIAccordionItem {...props} />;
};

export default AccordionItem;
