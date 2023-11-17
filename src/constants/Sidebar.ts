import React from "react";

interface SidebarItem {
  title: string;
  path: string;
  subNav?: SidebarItem[];
}

export const SidebarData: SidebarItem[] = [

  {
    title: "Relay",
    path: "#",

    subNav: [
      {
        title: "Protection",
        path: "/tool/fix/test/docs/relay/prot",
      },
      {
        title: "Lockout",
        path: "/tool/fix/test/docs/relay/lock",
      },
      {
        title: "Differential",
        path: "/tool/fix/test/docs/relay/diff",
      },
    ],
  },
  {
    title: "Switchgear",
    path: "#",

    subNav: [
      {
        title: "Circuit breaker",
        path: "/tool/fix/test/docs/trafo",
      },
      {
        title: "Prot. relay",
        path: "/overview/revenue",
      },
    ],
  },
  {
    title: "Transformer",
    path: "#",

    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
      },
      {
        title: "Reports",
        path: "/reports/reports1",
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
      },
    ],
  },
  {
    title: "Cable",
    path: "#",
    subNav: [
      {
        title: "Hi-Pot",
        path: "/reports/reports1",
      },
      {
        title: "Partial discharge",
        path: "/reports/reports1",
      },
    ],
  },
  {
    title: "RMU",
    path: "#",
  },
  {
    title: "Battery",
    path: "#",

    subNav: [
      {
        title: "Message 1",
        path: "#",
      },
      {
        title: "Message 2",
        path: "/messages/message2",
      },
    ],
  },
  {
    title: "Capacitor",
    path: "#",
  },
];
