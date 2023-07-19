// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

// const ROOTS_AUTH = '/auth';
// const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const MENU_PATH = {
  root: "/",
  login: "/login",
  blog: {
    root: "/blog",
    blogs: "/blogs",
    blog_detail: "/blogdetail",
  },
};
