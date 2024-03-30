import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill, BsListCheck, BsFillMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'

const Sidebar = ({OpenSidebarToggle, OpenSidebar}) => {
  return (
    <aside id='sidebar' className={OpenSidebarToggle ? "sidebar-responsive":""}>
        <div className='sidebar__title'>
            <div className='sidebar__brand'>
                <BsCart3 className='icon'/>Shop
            </div>
            <span className='icon icon__close' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
                <a href="#">
                    <BsGrid1X2Fill className='icon'/> Dasboard
                </a>
            </li>
            <li className='sidebar__list-item'>
                <a href="#">
                    <BsFillArchiveFill className='icon'/> Product
                </a>
            </li>
            <li className='sidebar__list-item'>
                <a href="#">
                    <BsFillGrid3X2GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar__list-item'>
                <a href="#">
                    <BsPeopleFill className='icon'/> Costumers
                </a>
            </li>
            <li className='sidebar__list-item'>
                <a href="#">
                    < BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar__list-item'>
                <a href="#">
                    <BsFillMenuButtonWideFill className='icon'/> Report
                </a>
            </li>
            <li className='sidebar__list-item'>
                <a href="#">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>


    </aside>
  )
}

export default Sidebar
