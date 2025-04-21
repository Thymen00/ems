'use client'

import Image from 'next/image'
import { ArrowRight, Home, User, Calendar, DollarSign, FileText, Menu, X, LogOut, PlusCircle, Briefcase, Save } from "lucide-react"
import Link from 'next/link'
import { useState } from 'react'

export default function Register() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          {sidebarOpen && <h2 className="text-xl font-bold">EMS System</h2>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md hover:bg-blue-700">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="flex flex-col flex-grow p-4 space-y-4">
          <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Home size={22} />
            {sidebarOpen && <span>Home</span>}
          </Link>
          
          <Link href="/manager" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <User size={22} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          
          <Link href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Calendar size={22} />
            {sidebarOpen && <span>Attendance</span>}
          </Link>
          
          <Link href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Briefcase size={22} />
            {sidebarOpen && <span>Leave Management</span>}
          </Link>
          
          <Link href="/manager/Register" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 transition-colors">
            <PlusCircle size={22} />
            {sidebarOpen && <span>Register Employee</span>}
          </Link>
          
          <Link href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <DollarSign size={22} />
            {sidebarOpen && <span>Payroll</span>}
          </Link>
          
          <Link href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <FileText size={22} />
            {sidebarOpen && <span>Reports</span>}
          </Link>
        </div>
        
        <div className="p-4 border-t border-blue-700">
          <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <LogOut size={22} />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Employee Registration</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white">
                  <span className="font-bold">JD</span>
                </div>
                <span className="font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Registration Form */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 text-center">Register New Employee</h2>
            
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
                      rows="3"
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
                  <Save className="mr-2" size={20} />
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