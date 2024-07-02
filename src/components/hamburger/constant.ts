const hamburger = [
  {
    title: "الدخول",
    path: "/login",
    icon: "ph:sign-in",
  },

  {
    title: "التسجيل",
    path: "/join",
    icon: "iconamoon:profile-light",
  },

  {
    title: "المنصة",
    path: "/platform",
    icon: "radix-icons:commit",
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
    title: "الاتصال",
    path: "/",
    icon: "fluent:mail-16-regular",
  },
  {
    title: "المطورين",
    path: "/contribute",
    icon: "bi:code",
  },
];

export default hamburger
