import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHubspot } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChartPie, faClosedCaptioning, faCogs, faComment, faFolder, faHeart, faSearch, faShoppingCart, faSignOutAlt, faTh, faTshirt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import s from './Navbar.module.css';
import { Link } from "react-router-dom";
import { SideBarData } from "./SidebarData";
import { IconContext } from 'react-icons' ;
import './Navbar.css';


const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <div className={s.navbar}>
            <Link to='#' className={s.menuBars}>
                <FontAwesomeIcon icon={faBars} onClick={showSideBar}/>
            </Link>
        </div>
        <nav className={sideBar ? 'navMenu active' : 'navMenu'}>
            <ul className={s.navMenuItems} onClick={showSideBar}>
                <li className={s.navbarToggle}>
                    <Link to='#' className={s.menuBars}>
                    <FontAwesomeIcon icon={faWindowClose} />
                    </Link>
                </li>
                {SideBarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName} >
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar ;