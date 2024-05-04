import type { CheckboxProps as NextUICheckboxProps } from '@nextui-org/react';
import { Checkbox as NextUICheckbox } from '@nextui-org/react';

export type CheckboxProps = NextUICheckboxProps;

function Checkbox(props: CheckboxProps): JSX.Element {
  return <NextUICheckbox {...props} />;
}

export default Checkbox;
