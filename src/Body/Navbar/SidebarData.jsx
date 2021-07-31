import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartPie, faClosedCaptioning, faCogs, faComment, faFolder, faHeart, faHome, faPaste, faQuestion, faSearch, faShoppingCart, faSignOutAlt, faSms, faTh, faTshirt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faApper, faProductHunt, faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import s from './Navbar.module.css';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome}/>,
        cName: s.navText
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <FontAwesomeIcon icon={faPaste}/>,
        cName: s.navText
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FontAwesomeIcon icon={faProductHunt}/>,
        cName: s.navText
    },
    {
        title: 'Team',
        path: '/team',
        icon: <FontAwesomeIcon icon={faTeamspeak}/>,
        cName: s.navText
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FontAwesomeIcon icon={faSms}/>,
        cName: s.navText
    },
    {
        title: 'Suuport',
        path: '/support',
        icon: <FontAwesomeIcon icon={faQuestion}/>,
        cName: s.navText
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FontAwesomeIcon icon={faCogs}/>,
        cName: s.navText
    },
];