import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'
export const SidebarData = [
  {
    id: 1,
    title: 'Ana Sayfa',
    path: '/',
    icon: <TbIcons.TbLayoutGrid />,
    open:"true"
  },
  {
    id: 2,
    title: 'Sporcular',
    path: '/sporcular',
    icon: <IoIcons.IoIosPaper />,
    open:"true",


    subNav: [
      {
        id: 222,
        title: 'Tüm Sporcular',
        path: '/sporcular/tum',
        icon: <IoIcons.IoMdPeople />,
      },
      {
        id: 233,
        title: 'Sporcu Listesi',
        path: '/sporcular/list',
        icon: <IoIcons.IoMdPeople />,
      },
    ],
  },
  {
    id: 3,
    title: 'Eğitim',
    path: '/egitim',
    icon: <AiIcons.AiFillHome />,
    open:"true",

    subNav: [
      {
        id: 333,
        title: 'Okul',
        path: '/egitim/okullar',
        icon: <IoIcons.IoMdPeople />,
      },
      {
        id: 344,
        title: 'Kurs',
        path: '/egitim/kurslar',
        icon: <IoIcons.IoMdPeople />,
      },
    ],
  },
  {
    id: 4,
    title: 'Diller',
    path: '/deneyim',
    icon: <IoIcons.IoIosPaper />,
    open:localStorage.getItem("dilToggle"),

  },
  {
    id: 5,
    title: 'Uyruklar',
    path: '/uyruklar',
    icon: <IoIcons.IoIosPaper />,
    open:"true",
  },
  
  {
    id: 7,
    title: 'Onur',
    path: '/onur',
    icon: <TbIcons.TbLayoutGrid />,
    open:"false",
  },
]

// export const SidebarData = [
//   {
//     title: 'Eğitim',
//     path: '/egitim',
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Users',
//         path: '/overview/users',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Revenue',
//         path: '/overview/revenue',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Deneyim',
//     path: '/deneyim',
//     icon: <IoIcons.IoIosPaper />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Reports',
//         path: '/reports/reports1',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 2',
//         path: '/reports/reports2',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 3',
//         path: '/reports/reports3',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'deneyim',
//     path: '/deneyim',
//     icon: <FaIcons.FaCartPlus />
//   },
//   {
//     title: 'İletişim',
//     path: '/iletisim',
//     icon: <IoIcons.IoMdPeople />
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,

//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Message 1',
//         path: '/messages/message1',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Message 2',
//         path: '/messages/message2',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />
//   }
// ];
