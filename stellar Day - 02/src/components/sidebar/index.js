import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay} from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img src="https://neural.love/cdn/ai-photostock/1edcb3d9-50ca-6084-b953-ed4fd79a0e5d/0.jpg?Expires=1704067199&Signature=pSDorUBXN9wOYDDGbIDYzgT5MG56juTAqhzL4fTyKji4LYRhh1veSB1EoVrmJ59S8I-EYi8Kl2-r9wbtcIXOHnE1yLaVwoe8FlKguDj42lTXuuGHFvguiRdOKzsCbyZ1aK19oVOmr45aBkHh1qCk70RKz2AifQEXK6OSS6Jb6xOTdsJSzRuHY6Ix2cqWEwWpQUhhDSLudrjZRpnqEWaIZ2wjEdxZ0pVlagCNjhw0--554fS9CYr~cMeWf34z-q0QRxyJiaba9Zwfx7JkUzrLJxf1OP-U7yaKMurw4Z0DEyNWJXVmF1Eg356qOgtSukuDR9sTa2xSjUrplr3VDW72EQ__&Key-Pair-Id=K2RFTOXRBNSROX"  className='profile-img' alt='profile' />

        <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} />
            <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>} />
            <SidebarButton title="Player" to="/player" icon={<FaPlay/>} />
            <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>} />
            <SidebarButton title="Library" to="/" icon={<IoLibrary/>} />

        </div>
        <SidebarButton title="Sign Out" to="/" icon={<FaSignOutAlt/>} />
    </div>
  )
}
