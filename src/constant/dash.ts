import { Icon } from '@iconify/react';



export const SIDENAV_ITEMS  = [
  {
    title: 'Project',
    path: '#',
    // icon: <Icon icon="mdi-light:home" />,
    
  },
  {
    title: 'Report',
    path: '/tool/flow/report',
    // icon: <Icon icon="mdi-light:home" />,
    
  },
  {
    title: 'Task',
    path: '/tool/flow/task',
    // icon: <Icon icon="mdi-light:home" />,
    
  },
  {
    title: 'Team',
    path: '/tool/flow/team',
    // icon: <Icon icon="mdi-light:home" />,
    
  },
  // {
  //   title: 'Plan',
  //   path: '/projects',
  //   // icon: <Icon icon="lucide:folder" width="24" height="24" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: 'All', path: '/projects' },
  //     { title: 'Web Design', path: '/projects/web-design' },
  //     { title: 'Graphic Design', path: '/projects/graphic-design' },
  //   ],
  // },
  {
    title: 'Messages',
    path: '/messages',
    // icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    // icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    // icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];