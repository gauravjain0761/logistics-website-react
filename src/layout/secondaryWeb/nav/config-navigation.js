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
    subheader: "Logistic",
    items: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About us",
        path: "/about",
      },
      {
        title: "Job",
        path: "/jobs",
      },
      {
        title: "Testimonials",
        path: "/tesimonials",
      },
      {
        title: "FAQ",
        path: "/faqs",
      },
      {
        title: "blog",
        path: "/blog",
        children: [
          { title: "Blog", path: "/blogs" },
          { title: "Blog Detail", path: "/blogdetail" },
        ],
      },
      {
        title: "Contact Us",
        path: "/contact",
      },
    ],
  },
];

export default navConfig;
