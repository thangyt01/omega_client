import { type FC } from 'react';

import NavBar from '../molecules/Navbar';

type HeaderType = 'normal' | 'register';

type HeaderProps = {
  type: HeaderType;
};

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { type } = props;

  return type === 'normal' ? <NavBar /> : null;
};

export default Header;
