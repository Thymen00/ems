'use client'

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ArrowLeft, Save, PlusCircle } from "lucide-react"

// Define a type for each dropdown item
type DropdownItem = {
    id: number;
    title: string;
    content: string;
};

export default function Register() {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    startDate: '',
    salary: '',
    address: '',
  });

  // Example dropdown items
  const dropdownItems: DropdownItem[] = [
    {
        id: 1,
        title: "Attendance Menu",
        content: "At the start of your shift press present, at the end of your shift click leave."
    },
    {
        id: 2,
        title: "Leave Management",
        content: "If the employee would like to leave for a longer period they have to get approval from the manager by requesting leave...."
    },
    {
        id: 3,
        title: "Salary",
        content: "Used for easy calculating your salary and able to see the history salary."
    },
    {
        id: 4,
        title: "Information View",
        content: "View all personal information and data"
    },
    {
        id: 5,
        title: "Register employee",
        content: "For new employees a manager is able to register for the employee and make a new account"
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend API
    alert("Employee registered successfully!");
    // Clear form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      startDate: '',
      salary: '',
      address: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            href="/manager"
          >
            <ArrowLeft size={18} />
            <span>Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Employee Registration</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm">
            <span className="font-medium">John Doe (Manager)</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto mt-6 grid grid-cols-12 gap-6 px-4">
        {/* Navigation Menu */}
        <aside className="col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 bg-blue-600 text-white">
            <h2 className="text-xl font-semibold">Navigation Menu</h2>
          </div>
          <nav className="p-2">
            {dropdownItems.map((item) => (
              <div key={item.id} className="mb-1">
                <div
                  className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors ${openDropdownId === item.id || (item.id === 5) ? 'bg-blue-50' : ''}`}
                  onClick={() => handleDropdownClick(item.id)}
                >
                  <div className="mr-2 text-blue-600">
                    {openDropdownId === item.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                  <span className={`${openDropdownId === item.id || (item.id === 5) ? 'font-medium text-blue-700' : 'text-gray-700'}`}>
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

        {/* Main Content - Registration Form */}
        <main className="col-span-9">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
            <h2 className="text-xl font-semibold mb-6 text-blue-700">Register New Employee</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange} 
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
                
                {/* Employment Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position/Job Title</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                    <input
                      type="number"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PlusCircle className="mr-2" size={20} />
                  Register Employee
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}