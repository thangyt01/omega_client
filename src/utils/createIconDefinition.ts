import type {
  IconDefinition,
  IconLookup,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

const createIconDefinition = (
  prefix: IconPrefix,
  iconName: IconName,
): IconDefinition => {
  const lookup: IconLookup = {
    prefix,
    iconName,
  };
  return findIconDefinition(lookup);
};

export default createIconDefinition;
