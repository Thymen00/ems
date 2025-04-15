'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown } from "lucide-react"

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
      content: "Here is the additional information that appears when you click the dropdown. You can add any content you want in this section."
    },
    {
      id: 2,
      title: "Information edit",
      content: "Here is additional information about editing. This section can contain links, instructions, or other content related to editing information."
    },
    {
      id: 3,
      title: "Data Export",
      content: "Export your data in various formats including CSV, JSON, and PDF. Set up scheduled exports or export on demand."
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
    <div className='bg-blue-300 h-screen'>
      <div className="grid grid-cols-[20%_80%] grid-rows-[12.5%_87.5%] w-[100%] h-[100%] ">
        <div className='border-1 flex col-span-2'>
          <Link className='text-xl font-bold hover:shadow-xl/20 bg-blue-200 flex justify-center items-center p-5 rounded-xl h-15 w-30 mt-2.5 ml-2'
            href="/employee">
            Return to dashboard
          </Link>
          <p className='font-bold text-4xl flex justify-center items-center w-[100%]'>Edit information</p>
        </div>
        <div className="grid col-1 row-2 border-2">
          <p className='border-1 font-bold text-2xl h-15 flex justify-center items-center underline'>Menu</p>
          
          {/* Map through dropdown items to create multiple independent dropdowns */}
          {dropdownItems.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center bg-blue-200 border-2 h-fit cursor-pointer"
                onClick={() => handleDropdownClick(item.id)}
              >
                <div className="mr-2">
                  {openDropdownId === item.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                <span className="font-bold">{item.title}</span>
              </div>
              
              {openDropdownId === item.id && (
                <div className="bg-blue-100 border-t border-blue-400 h-fit p-3">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="grid col-2 row-2 border-2">hallo</div>
      </div>
    </div>
  )
}

export default DropdownComponent;