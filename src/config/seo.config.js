const SITE_NAME = 'JS Bank app';

export const getTitle = (title) => {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME;
};
