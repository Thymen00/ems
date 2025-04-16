'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronsDown} from "lucide-react"
import Image from 'next/image'

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
            
            <div className="grid col-2 row-2 grid grid-cols-2 grid-rows-3 ">
                <div className='col-1 row-1  grid grid-cols-1 grid-rows-2'>
                    <div className='col-1 row-1  font-bold text-xl ml-15 flex items-end'>Employee requesting to leave:</div>
                    <div className='col-1 row-2 bg-gray-50 border-1 border-gray-400 flex ml-15 p-2 items-center w-[20%] h-[30%]'>Name</div>
                </div>
                <div className='col-1 row-2  grid grid-cols-2 grid-rows-3'>
                    <div className='col-1 row-span-2 '>
                        <Image
                            className='m-5 ml-25'
                            src="https://cdn4.iconfinder.com/data/icons/face-id/500/face-id-authentication-facial_2-512.png"
                            width={100}
                            height={100}
                            alt="Face scan"
                        />
                    </div>
                    <div className='col-1 row-3'>
                        <div className=' w-[60%] ml-18'>
                            <p className='font-bold  ml-13 '>Face ID</p>
                            <p className='text-red-500 text-sm '>Please scan your face ID</p>
                        </div> 
                    </div>
                        <div className='col-2 row-span-2 font-bold text-xl   flex items-center font-bold text-lg '>Face scan status</div>
                        <div className='col-2 row-3 bg-gray-50 border-1 border-gray-400 -mt-10 flex  p-2 items-center w-[40%] h-[35%]'>Completed</div>
                </div>
                <div className='col-2 row-span-2  grid grid-cols-1 grid-rows-3'>
                    <div className=' col-1 row-1  flex items-center rounded-xl w-[80%] p-5 h-10 text-lg bg-gray-300 gap-3 ml-10 mt-35'>Enter the time and date you wish to leave <ChevronsDown /></div>
                    <input 
                        placeholder='Start date'
                        className=' col-1 row-2 bg-indigo-200  flex items-center rounded-xl w-[80%] p-5 h-10 text-lg bg-gray-300 gap-3 mt-25 ml-10' 
                    />
                    <input 
                        placeholder='Final date'
                        className=' col-1 row-3 bg-indigo-200  flex items-center rounded-xl w-[80%] p-5 h-10 text-lg bg-gray-300 gap-3 mt-10 ml-10' 
                    />
                </div>
                <div className='col-span-2 row-3 '>
                    <p className=' h-[30%] w-[30%] font-bold text-1xl flex items-center justify-center rounded-xl bg-blue-200 translate-x-[120%] translate-y-[120%] hover:bg-red-500'>Cancel</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DropdownComponent;