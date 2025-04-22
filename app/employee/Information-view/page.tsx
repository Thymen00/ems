'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Check, ArrowLeft, Save, X, User, Mail, Phone, Home, Briefcase, Calendar, Award } from "lucide-react";

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
      setOpenDropdownId(null);
    } else {
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
              href="/manager" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft size={18} />
              <span>Return to Dashboard</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Personal Information</h1>
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

        {/* Main Content - Personal Information View */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold">
                JD
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-600">Software Developer</p>
                <p className="text-sm text-gray-500">Employee ID: EMP042</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Personal Information Card */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium text-gray-800">John Michael Doe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium text-gray-800">123 Main Street, Apt 4B</p>
                      <p className="font-medium text-gray-800">New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-medium text-gray-800">January 15, 1990</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-800">john.doe@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="font-medium text-gray-800">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              

              
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;