import { cache } from 'react';

import type { ClientSharedServerContext } from './@types/server';
import { assignClientContext } from './utils/assignClientContext';

// This allows us to have Server-Side Context's of the shared "contextual" data
// which includes the frontmatter, the current pathname from the dynamic segments
// and the current headings of the current markdown context
export const getClientContext = cache(() => {
  const serverSharedContext = assignClientContext({});

  return serverSharedContext;
});

// This is used by the dynamic router to define on the request
// the current set of information we use (shared)
export const setClientContext = (data: Partial<ClientSharedServerContext>) => {
  const contextData = assignClientContext(data);

  getClientContext().isMobile = contextData.isMobile;
  getClientContext().ua = contextData.ua;
  getClientContext().locale = contextData.locale;
};
