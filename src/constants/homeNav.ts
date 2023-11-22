const homeNav = [
  {
    title: "Log in",
    path: "/member/login",
  },

  {
    title: "Join",
    path: "/member/join",
  },

  {
    title: "Contribute",
    path: "/contribute",
    submenu: true,
    submenuItems: [
      {
        title: "Roadmap",
        path: "/",
      },

      {
        title: "Block",
        path: "/",
      },
    ],
  },

  {
    title: "Contact",
    path: "/",
  },
];

export default homeNav
