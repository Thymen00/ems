'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronsDown } from "lucide-react"
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
            <p className='font-bold text-4xl flex justify-center items-center w-[100%]'>Attendance dashboard</p>
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
            
            <div className='grid col-2 row-2 grid-cols-2 grid-rows-6'>
                <div className='col-1 row-1  '>
                    <div className=' w-[60%] translate-x-[60%] translate-y-[70%] '>
                        <p className='font-bold  ml-13 '>Face ID</p>
                        <p className='text-red-500 text-sm '>Please scan your face ID</p>
                    </div>    
                </div>
                <div className='col-1 row-span-3 '>
                    <div className='flex items-center justify-center'>
                        <Image
                            className='m-5 ml-8'
                            src="https://cdn4.iconfinder.com/data/icons/face-id/500/face-id-authentication-facial_2-512.png"
                            width={250}
                            height={250}
                            alt="Face scan"
                        />
                    </div>    
                </div>
                <div className='col-1 row-5 '>
                    <div className=' w-[60%] translate-x-[63%] translate-y-[20%] '>
                        <p className='font-bold ml-5'>Scan face again</p>
                        <p className='text-red-500 text-sm '>Please scan your face ID</p>
                    </div> 
                </div>
                <div className='col-1 row-6 '>
                    <p className=' h-[50%] w-[50%] font-bold text-2xl flex items-center justify-center rounded-xl bg-blue-200 translate-x-[50%] translate-y-[50%] hover:bg-blue-300'>Save</p>
                </div>
                
                <div className='col-2 row-span-3 row-start-1 row-end-4   '>
                    <div className='grid-rows-3 grid-cols-1 h-[100%] translate-x-[80%] translate-y-[30%] w-60'>
                        <div className=' col-1 row-1  flex items-center rounded-xl w-[100%] p-5 h-10 text-lg bg-gray-300 gap-3 '>Please choose <ChevronsDown /></div>
                        <div className=' col-1 row-2 bg-indigo-200 hover:inset-shadow-sm inset-shadow-indigo-500/50 flex items-center rounded-xl w-[100%] p-5 h-10 text-lg bg-gray-300 gap-3 mt-10 '>Present</div>
                        <div className=' col-1 row-3 bg-indigo-200 hover:inset-shadow-sm inset-shadow-indigo-500/50 flex items-center rounded-xl w-[100%] p-5 h-10 text-lg bg-gray-300 mt-5'>Leave</div>
                    </div>
                </div>
                <div className='col-2 row-span-2  '>
                <div className=' rounded-xl h-40 p-4 shadow-lg'>
                    <div className='font-bold text-sm  w-45 h-[100%] flex items-center border-r text-center p-4'>The time of present and the time of leave will automatically be entered in the system after scanning the users face</div>
                        <div className='grid-rows-2 grid-cols-1 h-[100%] translate-x-[85%] translate-y-[-60%] w-60 -mt-10 '>
                            
                            <div className=' col-1 row-1  flex items-center  w-[100%] p-5 h-10 text-lg bg-gray-200 gap-3  '>Time of enter:</div>
                            <div className=' col-1 row-2  flex items-center  w-[100%] p-5 h-10 text-lg bg-gray-200 mt-5'>Time of leave:</div>
                        </div>
                    </div>
                </div>
                
                <div className='col-2 row-6 '>
                    <p className=' h-[50%] w-[50%] font-bold text-2xl flex items-center justify-center rounded-xl bg-blue-200 translate-x-[50%] translate-y-[50%] hover:bg-red-500'>Cancel</p>
                </div>

            </div>
        </div>
    </div>
    )
}

export default DropdownComponent;