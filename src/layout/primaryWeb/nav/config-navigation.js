// ----------------------------------------------------------------------

// const navConfig = [
//   // DIGITALMENU MASTER
//   // ----------------------------------------------------------------------
//   {
//     subheader: "Digital Menu",
//     items: [
//       {
//         title: "dashboard",
//         path: (user) => PATH_DASHBOARD.general.app,
//         icon: ICONS.dashboard,
//         isShow: () => isShowMenu(1),
//         children: false,
//       },
//     ],
//   },
// ]
const navConfig = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/aboutus",
  },
  {
    title: "Job",
    path: "#jobs",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
  },
  {
    title: "FAQ",
    path: "/faqs",
  },
  {
    title: "Blog",
    path: "/blog",
    children: [
      {
        items: [
          { title: "Blog", path: "/blog/blogs" },
          { title: "Blog Detail", path: "/blog/blogdetail" },
        ],
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

export default navConfig;
