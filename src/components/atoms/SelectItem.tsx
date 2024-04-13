import type { SelectItemProps as NextUISelectItemProps } from '@nextui-org/react';
import { SelectItem as NextUISelectItem } from '@nextui-org/react';
import type { FC } from 'react';

export type SelectItemProps = NextUISelectItemProps;

const SelectItem: FC<SelectItemProps> = (props: SelectItemProps) => {
  return <NextUISelectItem {...props} />;
};

export default SelectItem;
