import type { NavbarBrandProps as NextUINavBarProps } from '@nextui-org/react';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar as NextUINavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import { searchIconDefinition } from '@/utils/createIcon';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { TempLogo } from '../atoms/TempLogo';

export type NavBarProps = NextUINavBarProps & {
  isLogined?: boolean;
};

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
  const t = useTranslations('Header');
  const { isLogined = false } = props;

  return (
    <NextUINavBar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          {/* <Logo logoType="header" /> */}
          <TempLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder={t('type_to_search')}
            size="sm"
            startContent={<Icon icon={searchIconDefinition} />}
            type="search"
          />
        </NavbarItem>
        {/* <SelectLanguage /> */}
        {isLogined ? (
          <NavbarItem>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">{t('login')}</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                {t('register')}
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </NextUINavBar>
  );
};

export default NavBar;
