import type { DividerProps as NextUIDividerProps } from '@nextui-org/react';
import { Divider as NextUIDivider } from '@nextui-org/react';
import type { PropsWithChildren } from 'react';

export type DividerProps = NextUIDividerProps &
  PropsWithChildren & {
    'data-testid'?: string;
  };

function Divider(props: DividerProps): JSX.Element {
  const { orientation = 'horizontal', ...rest } = props;
  // todo: implement dark theme

  return (
    <div
      // for testing purposes
      data-testid={rest['data-testid']}
      className="relative flex items-center py-5"
    >
      {orientation === 'horizontal' ? (
        <>
          <div className="grow  border-t-1 border-gray-400" />
          {props.children}
          <div className="grow  border-t-1 border-gray-400" />
        </>
      ) : (
        <NextUIDivider {...rest} orientation={orientation} />
      )}
    </div>
  );
}

export default Divider;
