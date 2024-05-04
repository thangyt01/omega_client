import { Avatar } from '@nextui-org/react';
import { render, screen } from '@testing-library/react';

import type { AvatarGroupProps } from '@/components/atoms/AvatarGroup';
import AvatarGroup from '@/components/atoms/AvatarGroup';

describe('AvatarGroup', () => {
  it('should render AvatarGroup component with props', () => {
    const avatars = Array.from({ length: 10 }, (_, i) => (
      <Avatar
        key={i}
        src={`https://randomuser.me/api/portraits/med/women/${i}.jpg`}
        alt="avatar"
      />
    ));

    const props = {
      children: avatars,
      id: 'avatar-group',
      'data-testid': 'avatar-group',
      max: 10,
    } as AvatarGroupProps;
    render(<AvatarGroup {...props} />);

    expect(screen.getByTestId('avatar-group')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(10);
  });

  it('should render only AvatarGroup component when avatars is empty', () => {
    const props = {
      id: 'avatar-group',
      'data-testid': 'avatar-group',
    } as AvatarGroupProps;
    render(<AvatarGroup {...props} />);

    const avatarGroupComponent = screen.getByTestId('avatar-group');
    expect(avatarGroupComponent).toBeInTheDocument();

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
