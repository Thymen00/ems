'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ArrowLeft, Calendar, User, Check, X } from "lucide-react";

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
            <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>
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
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column - Employee Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-gray-800 mb-2">Employee Requesting Leave</h2>
                  <div className="relative">
                    <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white">
                      <User size={18} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">John Doe</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-md">
                  <div className="flex items-start mt-6">
                    <div className="mr-8">
                      <img
                        src="/api/placeholder/100/100"
                        alt="Face scan"
                        className="rounded-lg border border-gray-200"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Face Scan Status</h3>
                      <div className="flex items-center bg-green-50 border border-green-200 rounded-md p-2 text-green-600">
                        <Check size={18} className="mr-2" />
                        <span>Completed</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Face ID verified</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Leave Request */}
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-800 mb-4">Leave Request Details</h2>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={18} className="mr-2 text-blue-600" />
                      <span>Enter the time and date you wish to leave</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <input 
                        type="date"
                        placeholder="Start date"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <input 
                        type="date"
                        placeholder="Final date"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Leave (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please provide a reason for your leave request"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-end mt-6 gap-4">
              <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2">
                <X size={18} />
                Cancel Request
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
                <Check size={18} />
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;