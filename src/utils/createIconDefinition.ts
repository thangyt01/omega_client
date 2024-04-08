import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconPrefix,
  IconName,
} from '@fortawesome/fontawesome-svg-core';

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
