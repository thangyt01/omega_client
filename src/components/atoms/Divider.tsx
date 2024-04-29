import type { DividerProps as NextUIDividerProps } from '@nextui-org/react';
import { Divider as NextUIDivider } from '@nextui-org/react';
import type { FC, PropsWithChildren } from 'react';

export type DividerProps = NextUIDividerProps & PropsWithChildren;

const Divider: FC<DividerProps> = (props: DividerProps) => {
  const { orientation = 'horizontal', ...rest } = props;
  // todo: implement dark theme

  return (
    <div className="relative flex items-center py-5">
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
};

export default Divider;
