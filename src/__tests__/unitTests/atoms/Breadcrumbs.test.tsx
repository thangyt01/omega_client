/* eslint-disable jest/expect-expect */
import { render, screen } from '@testing-library/react';

import Breadcrumbs, {
  type BreadcrumbListItem,
  type BreadcrumbsProps,
} from '@/components/atoms/Breadcrumbs';

describe('Breadcrumbs', () => {
  // Renders a NextUIBreadcrumbs component with props passed down from BreadcrumbsProps
  it('should render NextUIBreadcrumbs component with props', () => {
    const breadcrumbListItems = [
      { title: 'Home', to: '/' },
      { title: 'Products', to: '/products' },
      { title: 'Shoes', to: '/products/shoes' },
    ];
    const props: BreadcrumbsProps = {
      breadcrumbListItems,
    };
    render(<Breadcrumbs {...props} />);

    breadcrumbListItems.forEach((item) => {
      const linkElement = screen.getByText(item.title);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.to);
    });
  });

  // breadcrumbListItems is an empty array, renders only the NextUIBreadcrumbs component
  it('should render only NextUIBreadcrumbs component when breadcrumbListItems is empty', () => {
    const breadcrumbListItems: BreadcrumbListItem[] = [];
    const props: BreadcrumbsProps = {
      breadcrumbListItems,
    };
    render(<Breadcrumbs {...props} />);

    const breadcrumbsComponent = screen.getByRole('navigation');
    expect(breadcrumbsComponent).toBeInTheDocument();

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
