'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronsDown, ArrowLeft, Save, XCircle, PlusCircle, BadgeCheck } from "lucide-react"

// Define a type for each dropdown item
type DropdownItem = {
    id: number;
    title: string;
    content: string;
};

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [dataField, setDataField] = useState('');
  const [infoField, setInfoField] = useState('');

  // Example dropdown items
  const dropdownItems: DropdownItem[] = [
    {
        id: 1,
        title: "Information Input",
        content: "Add and input information as you wish."
    },
    {
        id: 2,
        title: "Information Edit",
        content: "Edit personal data and information that is already in the system."
    },
    {
        id: 3,
        title: "Attendance Menu",
        content: "At the start of your shift press present, at the end of your shift click leave."
    },
    {
        id: 4,
        title: "Leave Management",
        content: "If the employee would like to leave for a longer period they have to get approval from the manager by requesting leave...."
    },
    {
        id: 5,
        title: "Salary",
        content: "Used for easy calculating your salary and able to see the history salary."
    },
    {
        id: 6,
        title: "Information View",
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

  const validateForm = () => {
    return dataField.trim() !== '' && infoField.trim() !== '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            href="/employee"
          >
            <ArrowLeft size={18} />
            <span>Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Input Information</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm">
            <PlusCircle size={16} className="inline mr-1" />
            Add Mode
          </div>
        </div>
      </header>

      <div className="container mx-auto mt-6 grid grid-cols-12 gap-6 px-4">
        {/* Sidebar */}
        <aside className="col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 bg-blue-600 text-white">
            <h2 className="text-xl font-semibold">Navigation Menu</h2>
          </div>
          <nav className="p-2">
            {dropdownItems.map((item) => (
              <div key={item.id} className="mb-1">
                <div
                  className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors ${openDropdownId === item.id ? 'bg-blue-50' : ''}`}
                  onClick={() => handleDropdownClick(item.id)}
                >
                  <div className="mr-2 text-blue-600">
                    {openDropdownId === item.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                  <span className={`${openDropdownId === item.id ? 'font-medium text-blue-700' : 'text-gray-700'}`}>
                    {item.title}
                  </span>
                </div>
                
                {openDropdownId === item.id && (
                  <div className="ml-6 pl-3 border-l-2 border-blue-200 text-gray-600 py-2 pr-2 text-sm">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-span-9">
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
              Input the data you wish to add to the system
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                Add new information to your profile. All fields are required to ensure complete record keeping.
              </p>
            </div>

            {/* Form Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Data Field */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Data Field</h3>
                
                <div className="mb-2 text-sm text-gray-500">Field name or type:</div>
                <input
                  type="text"
                  placeholder="Enter field name (e.g. Phone Number)"
                  value={dataField}
                  onChange={(e) => setDataField(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                
                {dataField.trim() === '' && (
                  <p className="mt-2 text-sm text-red-500">
                    Please input the data field name
                  </p>
                )}
              </div>
              
              {/* Information Field */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Information Value</h3>
                
                <div className="mb-2 text-sm text-gray-500">Value or information:</div>
                <input
                  type="text"
                  placeholder="Enter value (e.g. 555-123-4567)"
                  value={infoField}
                  onChange={(e) => setInfoField(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                
                {infoField.trim() === '' && (
                  <p className="mt-2 text-sm text-red-500">
                    Please input the information value
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Information Box */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <div className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-800 mb-1">Important Note</h3>
                <p className="text-sm text-gray-600">
                  All information added will be associated with your employee profile. Ensure accuracy before saving.
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition-colors
                ${validateForm() 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-300 cursor-not-allowed text-white'}`}
              disabled={!validateForm()}
            >
              <Save size={18} />
              <span>Save Data</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-md transition-colors">
              <XCircle size={18} />
              <span>Cancel</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DropdownComponent;