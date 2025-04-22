'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ArrowLeft, Calendar, User, Check, X, Clock, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

// Define a type for each dropdown item
type DropdownItem = {
  id: number;
  title: string;
  content: string;
};

// Define a type for leave requests
type LeaveRequest = {
  id: string;
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  requestDate: string;
}

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: 'LR001',
      employeeId: 'EMP042',
      employeeName: 'John Doe',
      startDate: '2024-04-25',
      endDate: '2024-04-28',
      reason: 'Family vacation',
      status: 'pending',
      requestDate: '2024-04-21'
    },
    {
      id: 'LR002',
      employeeId: 'EMP089',
      employeeName: 'Jane Smith',
      startDate: '2024-05-01',
      endDate: '2024-05-05',
      reason: 'Medical appointment',
      status: 'pending',
      requestDate: '2024-04-20'
    },
    {
      id: 'LR003',
      employeeId: 'EMP157',
      employeeName: 'Michael Johnson',
      startDate: '2024-04-22',
      endDate: '2024-04-24',
      reason: 'Personal emergency',
      status: 'approved',
      requestDate: '2024-04-19'
    }
  ]);

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

  // Handle leave request approval/rejection
  const handleLeaveRequestAction = (requestId: string, action: 'approved' | 'rejected') => {
    setLeaveRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === requestId ? { ...request, status: action } : request
      )
    );
  };

  // Filter leave requests based on selected status
  const filteredRequests = leaveRequests.filter(request => 
    selectedStatus === 'all' ? true : request.status === selectedStatus
  );

  const getStatusBadgeClass = (status: LeaveRequest['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
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

        {/* Main Content - Leave Management Dashboard */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Leave Requests</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => setSelectedStatus('all')}
                  className={`px-4 py-2 rounded-lg ${selectedStatus === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setSelectedStatus('pending')}
                  className={`px-4 py-2 rounded-lg ${selectedStatus === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Pending
                </button>
                <button 
                  onClick={() => setSelectedStatus('approved')}
                  className={`px-4 py-2 rounded-lg ${selectedStatus === 'approved' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Approved
                </button>
                <button 
                  onClick={() => setSelectedStatus('rejected')}
                  className={`px-4 py-2 rounded-lg ${selectedStatus === 'rejected' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Rejected
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{request.employeeName}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(request.status)}`}>
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>Employee ID: {request.employeeId}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>Request Date: {request.requestDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>Start Date: {request.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>End Date: {request.endDate}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-medium">Reason: </span>{request.reason}
                      </div>
                    </div>
                    {request.status === 'pending' && (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleLeaveRequestAction(request.id, 'approved')}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Check size={18} />
                          Approve
                        </button>
                        <button 
                          onClick={() => handleLeaveRequestAction(request.id, 'rejected')}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <X size={18} />
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {filteredRequests.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No {selectedStatus !== 'all' ? selectedStatus : ''} leave requests found.</p>
                </div>
              )}
            </div>
          </div>

          {/* Summary Statistics */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg shadow">
              <h3 className="text-yellow-800 font-semibold mb-1">Pending Requests</h3>
              <p className="text-3xl font-bold text-yellow-700">
                {leaveRequests.filter(r => r.status === 'pending').length}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <h3 className="text-green-800 font-semibold mb-1">Approved Requests</h3>
              <p className="text-3xl font-bold text-green-700">
                {leaveRequests.filter(r => r.status === 'approved').length}
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow">
              <h3 className="text-red-800 font-semibold mb-1">Rejected Requests</h3>
              <p className="text-3xl font-bold text-red-700">
                {leaveRequests.filter(r => r.status === 'rejected').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;