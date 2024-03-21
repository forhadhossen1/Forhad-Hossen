import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo2.png'
import { GoProjectSymlink } from "react-icons/go";
import { FaThinkPeaks } from "react-icons/fa6";
import { MdOutlineManageAccounts, MdOutlineManageHistory } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
const Dashboard = () => {
    return (
        <div className=" flex max-w-screen-xl mx-auto">
            <div className="p-2 space-x-4 w-64 min-h-[100vh] bg-gray-900">
                <img src={logo} alt="" className=" " />

                <div className="divide-y my-5">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li>
                            <NavLink to='/dashboard/addProject' className="flex items-center p-2 text-lg gap-2"><GoProjectSymlink /> Add Project</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addProject' className="flex items-center p-2 text-lg gap-2"><FaThinkPeaks /> Add Testimonials</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addProject' className="flex items-center p-2 text-lg gap-2"><MdOutlineManageHistory /> Manage Project</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addProject' className="flex items-center p-2 text-lg gap-2"><MdOutlineManageAccounts /> Manage Testimonials</NavLink>
                        </li>

                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <NavLink to='/home' className="flex items-center p-2 text-lg gap-2"><FaHome /> Home </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;