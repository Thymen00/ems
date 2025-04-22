'use client'
import { useState } from 'react';
import { ChevronRight, ChevronDown, Check, ArrowLeft, Save, X, User, Mail, Phone, Home, Briefcase, Calendar, Award, Users } from "lucide-react";

// Define a type for each dropdown item
type DropdownItem = {
  id: number;
  title: string;
  content: string;
};

// Define Employee type
type Employee = {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  initials: string;
};

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [isEmployeeSelectOpen, setIsEmployeeSelectOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

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

  // Sample employee data
  const employees: Employee[] = [
    {
      id: "EMP042",
      name: "John Doe",
      position: "Software Developer",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main Street, Apt 4B, New York, NY 10001",
      dob: "January 15, 1990",
      initials: "JD"
    },
    {
      id: "EMP043",
      name: "Jane Smith",
      position: "Project Manager",
      email: "jane.smith@company.com",
      phone: "+1 (555) 234-5678",
      address: "456 Oak Avenue, Suite 12, Boston, MA 02108",
      dob: "March 22, 1988",
      initials: "JS"
    },
    {
      id: "EMP044",
      name: "Mike Johnson",
      position: "Senior Designer",
      email: "mike.johnson@company.com",
      phone: "+1 (555) 345-6789",
      address: "789 Pine Street, Chicago, IL 60601",
      dob: "September 8, 1985",
      initials: "MJ"
    },
    {
      id: "EMP045",
      name: "Sarah Wilson",
      position: "HR Specialist",
      email: "sarah.wilson@company.com",
      phone: "+1 (555) 456-7890",
      address: "321 Elm Road, San Francisco, CA 94105",
      dob: "December 1, 1992",
      initials: "SW"
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
            <a 
              href="/manager" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft size={18} />
              <span>Return to Dashboard</span>
            </a>
            <h1 className="text-2xl font-bold text-gray-800">Personal Information</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              M
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
              <div 
                className="relative cursor-pointer"
                onClick={() => setIsEmployeeSelectOpen(!isEmployeeSelectOpen)}
              >
                <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold hover:ring-4 hover:ring-blue-200 transition-all">
                  {selectedEmployee ? selectedEmployee.initials : "?"}
                </div>
                <div className="absolute -right-1 -bottom-1 bg-blue-600 rounded-full p-1">
                  <Users size={16} className="text-white" />
                </div>
              </div>
              <div>
                <h2 
                  className="text-2xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer"
                  onClick={() => setIsEmployeeSelectOpen(!isEmployeeSelectOpen)}
                >
                  {selectedEmployee ? selectedEmployee.name : "Select Employee"}
                </h2>
                <p className="text-gray-600">{selectedEmployee ? selectedEmployee.position : "No employee selected"}</p>
                <p 
                  className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer"
                  onClick={() => setIsEmployeeSelectOpen(!isEmployeeSelectOpen)}
                >
                  Employee ID: {selectedEmployee ? selectedEmployee.id : "---"}
                </p>
              </div>

              {/* Employee Selection Dropdown */}
              {isEmployeeSelectOpen && (
                <div className="absolute mt-32 ml-28 bg-white rounded-lg shadow-lg border border-gray-200 w-64 z-50">
                  <div className="p-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">Select Employee</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {employees.map((employee) => (
                      <div
                        key={employee.id}
                        className="p-3 hover:bg-blue-50 cursor-pointer flex items-center justify-between"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setIsEmployeeSelectOpen(false);
                        }}
                      >
                        <div>
                          <p className="font-medium text-gray-800">{employee.name}</p>
                          <p className="text-sm text-gray-600">{employee.id}</p>
                        </div>
                        {selectedEmployee?.id === employee.id && (
                          <Check size={16} className="text-blue-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {selectedEmployee ? (
              <div className="grid grid-cols-2 gap-6">
                {/* Personal Information Card */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="text-blue-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium text-gray-800">{selectedEmployee.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home className="text-blue-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium text-gray-800">{selectedEmployee.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="text-blue-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium text-gray-800">{selectedEmployee.dob}</p>
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
                        <p className="font-medium text-gray-800">{selectedEmployee.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-blue-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="font-medium text-gray-800">{selectedEmployee.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <Users size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">Click on the employee name or ID above to select an employee</p>
                <p className="text-gray-500 mt-2">You can view their personal information once selected</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;