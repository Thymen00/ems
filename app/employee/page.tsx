'use client'

import Image from 'next/image'
import { ArrowRight, Home, User, Calendar, DollarSign,  Menu, X, LogOut,  Clock,  } from "lucide-react"
import Link from 'next/link'
import { useState } from 'react'

export default function Employee() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

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
        <Link href="/employee/information-input" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <DollarSign size={22} />
            {sidebarOpen && <span>Input</span>}
          </Link>

          <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Home size={22} />
            {sidebarOpen && <span>Home</span>}
          </Link>
          
          <Link href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 transition-colors">
            <User size={22} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          
          <Link href="/employee/Attendance-dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Clock size={22} />
            {sidebarOpen && <span>Attendance</span>}
          </Link>
          
          <Link href="/employee/Leave-managemant" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Calendar size={22} />
            {sidebarOpen && <span>Leave</span>}
          </Link>
          
          <Link href="/employee/Salary-history" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <DollarSign size={22} />
            {sidebarOpen && <span>Salary</span>}
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
            <h1 className="text-2xl font-bold text-gray-800">Employee Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white">
                  <span className="font-bold">AB</span>
                </div>
                <span className="font-medium">Alice Brown</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Information Input Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex p-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/5137/5137377.png"
                    width={40}
                    height={40}
                    alt="Information Input Icon"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Information Input</h3>
                  <p className="mt-2 text-gray-600">Add personal data and information</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link href="/employee/information-input" className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium">
                  <span>Access Form</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Edit Information Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex p-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/2807/2807708.png"
                    width={40}
                    height={40}
                    alt="Edit Information Icon"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Edit Information</h3>
                  <p className="mt-2 text-gray-600">Edit your personal data and information</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link href="/employee/information-edit" className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium">
                  <span>Edit Profile</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Attendance Menu Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex p-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg">
                  <Image
                    src="https://icons.veryicon.com/png/o/miscellaneous/effevo/attendance-1.png"
                    width={40}
                    height={40}
                    alt="Attendance Icon"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Attendance Menu</h3>
                  <p className="mt-2 text-gray-600">Record your daily attendance status</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link href="/employee/Attendance-dashboard" className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium">
                  <span>Check In</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Leave Management Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex p-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-lg">
                  <Image
                    src="https://static.thenounproject.com/png/144676-200.png"
                    width={40}
                    height={40}
                    alt="Leave Management Icon"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Leave Management</h3>
                  <p className="mt-2 text-gray-600">Request and track your leave applications</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link href="/employee/Leave-managemant" className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium">
                  <span>Request Leave</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Salary Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex p-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/5525/5525464.png"
                    width={40}
                    height={40}
                    alt="Salary Icon"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Salary History</h3>
                  <p className="mt-2 text-gray-600">View your salary history and projections</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link href="/employee/Salary-history" className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium">
                  <span>View History</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Information View Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex p-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/1/1755.png"
                    width={40}
                    height={40}
                    alt="Information View Icon"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Information View</h3>
                  <p className="mt-2 text-gray-600">View all your personal information</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link href="/employee/Information-view" className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium">
                  <span>View Profile</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}