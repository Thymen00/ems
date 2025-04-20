'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronsDown, ArrowLeft, Save, XCircle, PenLine, BadgeCheck } from "lucide-react"

// Define a type for each dropdown item
type DropdownItem = {
    id: number;
    title: string;
    content: string;
};

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [selectedDataType, setSelectedDataType] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentData, setCurrentData] = useState("-------");

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

  const dataItems = [
    "First and last name",
    "E-mail",
    "Phone number",
    "Home address",
    "Job role"
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

  const handleDataTypeSelect = (dataType: string) => {
    setSelectedDataType(dataType);
    setShowDropdown(false);
    
    // Set some sample data based on selection
    const sampleData: {[key: string]: string} = {
      "First and last name": "John Doe",
      "E-mail": "john.doe@company.com",
      "Phone number": "+1 (555) 123-4567",
      "Home address": "123 Main Street, Anytown, AN 12345",
      "Job role": "Senior Developer"
    };
    
    setCurrentData(sampleData[dataType] || "-------");
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
          <h1 className="text-2xl font-bold text-gray-800">Edit Information</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm">
            <PenLine size={16} className="inline mr-1" />
            Edit Mode
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
          {/* Data Selection Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Choose the data you wish to edit</h2>
            
            <div className="relative mb-6">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between w-full md:w-1/2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <span className="text-gray-700">
                  {selectedDataType || "Please select data type"}
                </span>
                <ChevronsDown size={18} className="text-gray-500" />
              </button>
              
              {showDropdown && (
                <div className="absolute z-10 mt-1 w-full md:w-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <ul className="py-1">
                    {dataItems.map((item, index) => (
                      <li 
                        key={index}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors text-gray-700"
                        onClick={() => handleDataTypeSelect(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {!selectedDataType && (
              <p className="text-red-500 text-sm">Please select the data you wish to edit</p>
            )}
          </div>
          
          {/* Current and Edit Data Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Data */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Data already in system</h3>
              
              <div className="mb-2 text-sm text-gray-500">Current value:</div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-16 flex items-center">
                {currentData}
              </div>
            </div>
            
            {/* Edit Data */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Edit the selected data</h3>
              
              <div className="mb-2 text-sm text-gray-500">New value:</div>
              <input
                type="text"
                placeholder="Enter new data"
                defaultValue={selectedDataType ? currentData : ""}
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              
              {selectedDataType && (
                <p className="mt-2 text-sm text-gray-500">
                  Editing: <span className="font-medium text-blue-600">{selectedDataType}</span>
                </p>
              )}
              {!selectedDataType && (
                <p className="mt-2 text-sm text-red-500">
                  Please select data type first
                </p>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
              disabled={!selectedDataType}
            >
              <BadgeCheck size={18} />
              <span>Save Changes</span>
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