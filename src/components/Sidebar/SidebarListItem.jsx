import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import { Link } from 'react-router-dom'

const SidebarListItem = ({ icon, title, path, subNavList }) => {
  const [subnav, setSubnav] = useState(false)
  console.log(subNavList)

  const showSubnav = () => {
    console.log(subNavList)
    setSubnav(!subnav)
  }

  return (
    <>
      <li>
        <Link
          className="link_item"
          to={path}
          onClick={subNavList && showSubnav}
        >
          <i>{icon}</i>
          <span className="links_name">{title}</span>

          <div className="sidebar_dropdown_icon">
            {subNavList &&
              (subnav ? (
                <RiIcons.RiArrowUpSFill />
              ) : (
                <RiIcons.RiArrowDownSFill />
              ))}
          </div>
        </Link>
        <span className="tooltip">{title}</span>
      </li>
      {subnav &&
        subNavList.map((item) => {
          return (
            <Link className="dropdown-link" to={item.path} key={item.id}>
              {item.icon}
              <div className="sidebar-label">{item.title}</div>
            </Link>
          )
        })}
    </>
  )
}

export default SidebarListItem
