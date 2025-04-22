'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ArrowLeft, Clock, Calendar, Users, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react"

// Define a type for each dropdown item
type DropdownItem = {
    id: number;
    title: string;
    content: string;
};

// Add types for attendance records
type AttendanceRecord = {
    employeeId: string;
    status: 'present' | 'absent' | 'leave' | 'late' | 'half-day';
    checkIn?: string;
    checkOut?: string;
}

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('month');

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

  // Generate mock attendance data
  const generateAttendanceData = (date: Date): Record<number, AttendanceRecord[]> => {
    const data: Record<number, AttendanceRecord[]> = {};
    const statuses: ('present' | 'absent' | 'leave' | 'late' | 'half-day')[] = ['present', 'absent', 'leave', 'late', 'half-day'];
    
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    // Generate data for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const numberOfEmployees = Math.floor(Math.random() * 5) + 1; // 1-5 employees per day
      data[day] = [];
      
      for (let i = 0; i < numberOfEmployees; i++) {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const employeeId = `EMP${String(Math.floor(Math.random() * 1000) + 1).padStart(3, '0')}`;
        
        const record: AttendanceRecord = {
          employeeId,
          status
        };
        
        if (status !== 'absent' && status !== 'leave') {
          record.checkIn = `${Math.floor(Math.random() * 3) + 8}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} AM`;
          record.checkOut = `${Math.floor(Math.random() * 4) + 3}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} PM`;
        }
        
        data[day].push(record);
      }
    }
    
    return data;
  };

  const attendanceData = generateAttendanceData(selectedDate);

  // Get days of the week
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const calendar: (number | null)[][] = [];
    let day = 1;
    
    for (let i = 0; i < 6; i++) { // 6 weeks max in calendar view
      const week: (number | null)[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      calendar.push(week);
      if (day > daysInMonth) break;
    }
    return calendar;
  };

  const calendarDays = getDaysInMonth(selectedDate);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Navigation functions
  const navigateMonth = (direction: 'prev' | 'next') => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + (direction === 'next' ? 1 : -1), 1));
  };

  const getStatusColor = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'leave':
        return 'bg-blue-100 text-blue-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      case 'half-day':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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

        {/* Main Content - Calendar View */}
        <main className="col-span-9">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Calendar Header */}
            <div className="bg-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                <h2 className="text-xl font-semibold text-white">
                  {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </h2>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <ChevronRightIcon className="text-white" size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setViewMode('day')}
                  className={`px-3 py-1 rounded ${viewMode === 'day' ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700'}`}
                >
                  Day
                </button>
                <button 
                  onClick={() => setViewMode('week')}
                  className={`px-3 py-1 rounded ${viewMode === 'week' ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700'}`}
                >
                  Week
                </button>
                <button 
                  onClick={() => setViewMode('month')}
                  className={`px-3 py-1 rounded ${viewMode === 'month' ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700'}`}
                >
                  Month
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              {/* Week Day Headers */}
              <div className="grid grid-cols-7 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="text-center font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.flat().map((day, index) => (
                  <div 
                    key={index}
                    className={`h-32 p-2 border border-gray-200 ${day ? 'bg-white' : 'bg-gray-50'} overflow-y-auto`}
                  >
                    {day && (
                      <>
                        <div className="font-semibold text-gray-800 mb-2">{day}</div>
                        <div className="space-y-1">
                          {attendanceData[day]?.map((record, idx) => (
                            <div 
                              key={`${record.employeeId}-${idx}`} 
                              className={`text-xs px-2 py-1 rounded ${getStatusColor(record.status)}`}
                            >
                              <div className="font-semibold">{record.employeeId}</div>
                              <div className="capitalize">{record.status}</div>
                              {record.checkIn && <div>In: {record.checkIn}</div>}
                              {record.checkOut && <div>Out: {record.checkOut}</div>}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Statistics */}
          <div className="mt-6 grid grid-cols-5 gap-4">
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <h3 className="text-green-800 font-semibold mb-1">Present</h3>
              <div className="flex items-center gap-2">
                <Users className="text-green-600" size={24} />
                <span className="text-2xl font-bold text-green-700">156</span>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow">
              <h3 className="text-red-800 font-semibold mb-1">Absent</h3>
              <div className="flex items-center gap-2">
                <Users className="text-red-600" size={24} />
                <span className="text-2xl font-bold text-red-700">24</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-blue-800 font-semibold mb-1">On Leave</h3>
              <div className="flex items-center gap-2">
                <Users className="text-blue-600" size={24} />
                <span className="text-2xl font-bold text-blue-700">18</span>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow">
              <h3 className="text-yellow-800 font-semibold mb-1">Late</h3>
              <div className="flex items-center gap-2">
                <Users className="text-yellow-600" size={24} />
                <span className="text-2xl font-bold text-yellow-700">9</span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg shadow">
              <h3 className="text-orange-800 font-semibold mb-1">Half-Day</h3>
              <div className="flex items-center gap-2">
                <Users className="text-orange-600" size={24} />
                <span className="text-2xl font-bold text-orange-700">12</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DropdownComponent;