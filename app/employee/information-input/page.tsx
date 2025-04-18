'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronsDown, BadgeCheck } from "lucide-react"

// Define a type for each dropdown item
type DropdownItem = {
    id: number;
    title: string;
    content: string;
};

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  // Example dropdown items
const dropdownItems: DropdownItem[] = [
    {
        id: 1,
        title: "Information input",
        content: "Add and input information as you wish."
    },
    {
        id: 2,
        title: "Information edit",
        content: "Edit personal data and information that is already in the system."
    },
    {
        id: 3,
        title: "Attendance menu",
        content: "At the start of your shift press present, at the end of your shift click leave."
    },
    {
        id: 4,
        title: "Leave management",
        content: "If the employee would like to leave for a longer period they have to get approval from the manager by requesting leave...."
    },
    {
        id: 5,
        title: "Salary",
        content: "Used for easy calculating your salary and able to see the history salary."
    },
    {
        id: 6,
        title: "Information view",
        content: "View all personal information and data"
    }
];

  // Handler for clicking a dropdown bar
const handleDropdownClick = (id: number) => {
    if (openDropdownId === id) {
      // If clicking on already open dropdown, close it
    setOpenDropdownId(null);
    } else {
      // Otherwise, open the clicked dropdown (and close any other)
    setOpenDropdownId(id);
    }
};

    return (
    <div className='bg-blue-100 h-screen'>
        <div className="grid grid-cols-[20%_80%] grid-rows-[12.5%_87.5%] w-[100%] h-[100%] ">
            <div className=' flex col-span-2  border-b'>
            <Link className='text-xl font-bold hover:shadow-xl/20 bg-blue-200 flex justify-center items-center p-5 rounded-xl h-15 w-30 mt-2.5 ml-2'
                href="/employee">
                Return to dashboard
            </Link>
            <p className='font-bold text-4xl flex justify-center items-center w-[100%]'>Edit information</p>
            </div>
            
            <div className="grid col-1 row-2  bg-gradient-to-r from-slate-200 to-slate-300">
            <p className=' font-bold text-2xl h-15 flex justify-center items-center underline'>Menu</p>
            
            {/* Map through dropdown items to create multiple independent dropdowns */}
            {dropdownItems.map((item) => (
                <div key={item.id}>
                <div
                    className="flex items-center  h-fit cursor-pointer"
                    onClick={() => handleDropdownClick(item.id)}
                >
                    <div className="mr-2">
                    {openDropdownId === item.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </div>
                    <span className="font-bold">{item.title}</span>
                </div>
                
                {openDropdownId === item.id && (
                    <div className=" border-t border-blue-400 h-fit p-3">
                    <p>{item.content}</p>
                    </div>
                )}
                </div>
            ))}
            </div>
            
            <div className='grid grid-cols-2 grid-rows-4'>
                <div className='row-1 col-span-2  font-bold text-3xl flex items-end justify-center -mb-7'>Input the data you wish to add to the system:</div>
                <div className='grid col-1 row-2  grid-cols-1 grid-rows-[23%_23%_8%_23%_23%]  '>
                    <div className=' h-25 w-[50%]  bottom-0 rounded-xl bg-slate-100 mt-13 ml-70'>
                        
                    <input
                            placeholder='Data'
                            className='col-1 row-4 border-1 ml-2 flex items-center p-2 w-[80%] h-10 mt-7'
                        />
                        <p className='text-red-500 text-sm ml-3'>Please input your data</p>
                    </div>
                </div>
                <div className='grid col-2 row-2  grid-cols-1 grid-rows-[23%_23%_8%_23%_23%]  '>
                    <div className=' h-25 w-[50%]  bottom-0 rounded-xl bg-slate-100 mt-13 ml-10'>
                        
                        <input
                            placeholder='Information'
                            className='col-1 row-4 border-1 ml-2 flex items-center p-2 w-[80%] h-10 mt-7'
                        />
                        <p className='text-red-500 text-sm ml-3'>Please input the information</p>
                    </div>
                </div>
                <div className='grid col-1 row-4 '>
                    <p className=' h-[40%] w-[40%] font-bold text-2xl flex items-center justify-center rounded-xl bg-blue-200 translate-x-[120%] translate-y-[80%] hover:bg-blue-300'>Save data</p>
                </div>
                <div className='grid col-2 row-4'>
                    <p className=' h-[40%] w-[40%] font-bold text-2xl flex items-center justify-center rounded-xl bg-blue-200 translate-x-[30%] translate-y-[80%] hover:bg-red-500'>Cancel</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DropdownComponent;