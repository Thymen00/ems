'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown,  ArrowLeft, Clock, Save, XCircle } from "lucide-react"
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
  const [attendanceStatus, setAttendanceStatus] = useState<string | null>(null);

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

  const selectAttendanceStatus = (status: string) => {
    setAttendanceStatus(status);
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
          <h1 className="text-2xl font-bold text-gray-800">Attendance Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm">
            <Clock size={16} className="inline mr-1" />
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
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
        <main className="col-span-9 grid grid-cols-2 gap-6">
          {/* Face ID Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Face ID Verification</h2>
            <p className="text-red-500 text-sm mb-6">Please scan your face to record attendance</p>
            
            <div className="relative w-64 h-64 mb-8 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
              <Image
                className="object-contain"
                src="https://cdn4.iconfinder.com/data/icons/face-id/500/face-id-authentication-facial_2-512.png"
                width={200}
                height={200}
                alt="Face scan"
              />
              <div className="absolute inset-0 bg-blue-400 bg-opacity-20 animate-pulse rounded-xl"></div>
            </div>
            
            <button className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
              </svg>
              Scan Face Again
            </button>
          </div>

          {/* Attendance Selection */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Record Attendance</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-600 mb-4">Please select your attendance status:</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => selectAttendanceStatus('present')}
                  className={`w-full p-3 rounded-lg flex items-center justify-between transition-all
                    ${attendanceStatus === 'present' 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                >
                  <span className="font-medium">Present</span>
                  {attendanceStatus === 'present' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  )}
                </button>
                
                <button 
                  onClick={() => selectAttendanceStatus('leave')}
                  className={`w-full p-3 rounded-lg flex items-center justify-between transition-all
                    ${attendanceStatus === 'leave' 
                      ? 'bg-orange-600 text-white shadow-md' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                >
                  <span className="font-medium">Leave</span>
                  {attendanceStatus === 'leave' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 flex-grow">
              <h3 className="font-semibold text-blue-800 mb-3">Today's Records</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time of entry:</span>
                  <span className="font-mono bg-white px-3 py-1 rounded border border-blue-100">
                    {attendanceStatus === 'present' ? '09:15 AM' : '-- : --'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time of leave:</span>
                  <span className="font-mono bg-white px-3 py-1 rounded border border-blue-100">
                    {attendanceStatus === 'leave' ? '05:30 PM' : '-- : --'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Box */}
          <div className="col-span-2 bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-yellow-800 mb-2">Important Information</h3>
              <p className="text-gray-700">
                The time of entry and departure will be automatically recorded in the system after successful face identification. 
                Please ensure that you are directly facing the camera when scanning.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-span-2 flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors">
              <Save size={18} />
              <span>Save Record</span>
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