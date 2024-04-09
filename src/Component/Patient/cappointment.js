import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Appointments from './components/Appointments';

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { CiSearch } from "react-icons/ci";
import { LiaPrescriptionBottleAltSolid } from "react-icons/lia";
import { RiDownload2Fill } from "react-icons/ri";

import {
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Time", "Date", "Patient Name", "Age", "Doctor", "Fee Status", "Action"];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        doctor: "Dr.Smith",
        time: "10:30 AM",
        age: 22,
        token: 2,
        fee: true,
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        doctor: "Dr.Roopa S",
        time: "11:30 AM",
        age: 22,
        token: 5,
        fee: true,
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        doctor: "Dr.John Doe",
        time: "10:30 AM",
        online: false,
        age: 22,
        token: 9,
        fee: true,
        date: "19/09/17",
    },

];

const DashboardLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-[#E2F1FF] h-screen'>
            <NavbarMobile toggle={toggleSidebar} />
            <div>
                <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
                <h1 className='absolute lg:ml-52 p-7 pt-6 font-semibold hidden lg:block'>Appointment Details</h1>
                <Navbar />

                <div className='bg-white lg:ml-60 ml-6 me-6 lg:me-8 mt-1 h-full pb-5 rounded-lg'>
                    <Card className="h-full w-full">
                        <div className='flex justify-between pt-5 pl-5 md:pe-5'>
                            <div className='hidden sm:flex'>
                                <h5 className='text-xs font-bold cursor-pointer text-slate-400'><Link to="/patient/appointments"> UPCOMING APPOINTMENTS </Link></h5>
                                <h1 className='text-xs cursor-pointer pl-5 md:pr-5 underline underline-offset-8 decoration-blue-700 font-bold'>COMPLETED APPOINTMENTS</h1>
                            </div>
                            <button className='hidden sm:inline bg-[#3497F9] text-white text-xs rounded-xl mb-0 mt-0 px-2 p-1.5'>New Appointment</button>
                            <div className='sm:hidden flex'>
                                <h5 className='text-xs font-bold cursor-pointer pr-1 md:pr-5 underline underline-offset-8 decoration-blue-700 hover:font-bold'><Link to="/patient/appointments">UPCOMING</Link></h5>
                                <h1 className='text-xs cursor-pointer text-slate-400 font-bold'>COMPLETED </h1>
                            </div>
                            <button className='sm:hidden bg-[#3497F9] text-white text-xs rounded-xl mb-1 me-3 px-2 p-1.5'>new appointment</button>
                        </div>
                        <div className='flex mb-3 ml-6 mt-0'>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="pl-8 w-32 h-6 text-xs mt-3 rounded-full bg-[#E2F1FF] outline-none"
                                    placeholder="Search"
                                />
                                <CiSearch className="absolute mt-2 left-2 top-2" /> {/* Assuming CiSearch is an icon component */}
                            </div>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="md:ml-8 ml-2 pl-3 w-32 h-6 text-blue-400 cursor-pointer text-xs mt-3 pe-2 border border-blue-600 rounded-full  outline-none"
                                    value="Filter by Date"
                                />
                            </div>
                        </div>

                        <CardBody className="overflow-x-hidden  px-3 pt-2">
                            <div className="overflow-x-auto">
                                <table className=" w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {TABLE_HEAD.map((head, index) => (

                                                <th
                                                    key={head}
                                                    className="cursor-pointer border-b-2 p-2 pl-6 " >
                                                    <Typography className="flex gap-2 text-xs font-semibold leading-none ">
                                                        {head}{" "}
                                                        {index !== TABLE_HEAD.length - 1 && (
                                                            <ChevronUpDownIcon strokeWidth={2} className="h-3 w-3" />
                                                        )}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TABLE_ROWS.map(
                                            ({ img, name, time, doctor, date, age, fee }, index) => {
                                                const isLast = index === TABLE_ROWS.length - 1;
                                                const classes = isLast ? "pl-3 border-b border-blue-gray-50" : "pl-3 border-b border-blue-gray-50";
                                                return (
                                                    <tr key={name} className=' h-14'>
                                                        <td className={classes}>
                                                            <div className=" flex items-center p-3">
                                                                <Typography className=" font-semibold text-xs text-slate-500" >
                                                                    {time}
                                                                </Typography>
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex items-center ">
                                                                <Typography className="pl-1 font-semibold text-xs text-slate-500" >
                                                                    {date}
                                                                </Typography>
                                                            </div>
                                                        </td>

                                                        <td className={classes}>
                                                            <div className="flex items-center">
                                                                <img src={img} alt={name} className="w-7 h-7 rounded-full mr-2" /> {/* Image */}
                                                                <Typography className="font-semibold text-xs pb-2 pl-0 text-slate-500">{name}</Typography> {/* Name */}
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex items-center">
                                                                <Typography className="pl-4 font-semibold text-xs text-slate-500" >
                                                                    {age}
                                                                </Typography>
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex items-center">
                                                                <Typography className="pl-2 font-semibold text-xs text-slate-500" >
                                                                    {doctor}
                                                                </Typography>
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex items-center">
                                                                <Typography className="pl-6 font-semibold text-xs text-slate-500" >
                                                                    Paid
                                                                </Typography>
                                                            </div>
                                                        </td>


                                                        <td className={classes}>
                                                            <div className="flex items-center">
                                                                <button className=" border-2  border-blue-500 rounded-lg p-1 flex items-center justify-center">
                                                                    <LiaPrescriptionBottleAltSolid className="w-3 h-3 " />
                                                                </button>
                                                                <button className="ml-2 me-2 border-2 border-blue-500   rounded-lg p-1 flex items-center justify-center">
                                                                    <RiDownload2Fill className="w-3 h-3 " />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            },
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                    <div class="flex justify-end items-center">
                        <div>

                            <button class=" hover:bg-blue-600 hover:text-white text-blue-600 text-sm py-1 px-2 rounded-md">
                                Prev
                            </button>
                        </div>
                        <div>
                            <button class=" bg-blue-600 text-white  text-sm py-1 px-2 rounded-md">
                                1
                            </button>
                            <button class=" hover:bg-blue-600 hover:text-white text-blue-600 text-sm py-1 px-2 rounded-md">
                                2
                            </button>
                            <button class=" hover:bg-blue-600 hover:text-white text-blue-600 text-sm py-1 px-2 rounded-md">
                                3
                            </button>
                        </div>
                        <div>
                            <button class="me-5 hover:bg-blue-600 hover:text-white text-blue-600 text-sm py-1 px-2 rounded-md">
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
