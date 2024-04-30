'use client';

import type {
  BreadcrumbItemProps as NextUIBreadcrumbItemProps,
  BreadcrumbsProps as NextUIBreadcrumbsProps,
} from '@nextui-org/react';
import {
  BreadcrumbItem as NextUIBreadcrumbItem,
  Breadcrumbs as NextUIBreadcrumbs,
} from '@nextui-org/react';

import Link from './Link';

export type BreadcrumbListItem = {
  title: string;
  to: string;
} & Partial<NextUIBreadcrumbItemProps>;

export type BreadcrumbsProps = NextUIBreadcrumbsProps & {
  breadcrumbListItems: Array<BreadcrumbListItem>;
};

function Breadcrumbs(props: BreadcrumbsProps): JSX.Element {
  const { breadcrumbListItems, ...rest } = props;
  return (
    <NextUIBreadcrumbs {...rest}>
      {breadcrumbListItems.map((item) => (
        <NextUIBreadcrumbItem key={item.title} {...item}>
          <Link className="text-gray-600" href={item.to}>
            {item.title}
          </Link>
        </NextUIBreadcrumbItem>
      ))}
    </NextUIBreadcrumbs>
  );
}

export default Breadcrumbs;
