'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Check, ArrowLeft, Save, X } from "lucide-react";

// Define a type for each dropdown item
type DropdownItem = {
  id: number;
  title: string;
  content: string;
};

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [selectedData, setSelectedData] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);

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

  const dataOptions = [
    "First and last name",
    "E-mail",
    "Phone number",
    "Home address",
    "Job role"
  ];

  // Handler for clicking a dropdown bar
  const handleDropdownClick = (id: number) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(id);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedData(option);
    setShowDropdown(false);
    // Mock existing data based on selection
    if (option === "First and last name") {
      setCurrentValue("John Doe");
    } else if (option === "E-mail") {
      setCurrentValue("john.doe@example.com");
    } else if (option === "Phone number") {
      setCurrentValue("+1 (555) 123-4567");
    } else if (option === "Home address") {
      setCurrentValue("123 Main St, Anytown, USA");
    } else if (option === "Job role") {
      setCurrentValue("Software Developer");
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link 
              href="/employee" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft size={18} />
              <span>Return to Dashboard</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Edit Information</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              JD
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto mt-6 grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-blue-600 text-white">
              <h2 className="font-semibold text-lg">Menu</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {dropdownItems.map((item) => (
                <div key={item.id} className="overflow-hidden">
                  <div
                    className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${openDropdownId === item.id ? 'bg-blue-50' : ''}`}
                    onClick={() => handleDropdownClick(item.id)}
                  >
                    <div className="mr-2 text-blue-600">
                      {openDropdownId === item.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </div>
                    <span className={`${openDropdownId === item.id ? 'font-medium text-blue-700' : 'text-gray-700'}`}>{item.title}</span>
                  </div>
                  
                  {openDropdownId === item.id && (
                    <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600 border-l-4 border-blue-500">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Edit Your Information</h2>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select information to edit
              </label>
              <div className="relative">
                <button 
                  className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {selectedData || "Choose data to edit"}
                  <ChevronDown size={18} className="text-gray-400" />
                </button>
                
                {showDropdown && (
                  <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <ul className="py-1 max-h-60 overflow-auto">
                      {dataOptions.map((option, index) => (
                        <li 
                          key={index} 
                          className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center text-gray-700"
                          onClick={() => handleOptionSelect(option)}
                        >
                          {selectedData === option && (
                            <Check size={16} className="mr-2 text-blue-600" />
                          )}
                          <span className={selectedData === option ? "font-medium" : ""}>
                            {option}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {!selectedData && (
                <p className="mt-2 text-sm text-red-500">Please select data to edit</p>
              )}
            </div>
            
            {selectedData && (
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Editing: {selectedData}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current value:
                    </label>
                    <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md">
                      {currentValue}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New value:
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter new value"
                    />
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-end gap-4 mt-6">
              <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2">
                <X size={18} />
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;