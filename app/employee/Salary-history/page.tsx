'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ArrowLeft, Calculator, RefreshCw } from "lucide-react";

// Define a type for each dropdown item
type DropdownItem = {
  id: number;
  title: string;
  content: string;
};

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  
  // States for salary calculator - kept unchanged
  const [regularHours, setRegularHours] = useState('40');
  const [overtimeHours, setOvertimeHours] = useState('0');
  const [hourlyRate, setHourlyRate] = useState('15');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState<null | {
    regularPay: number,
    overtimePay: number,
    totalPay: number
  }>(null);

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

  // Salary calculator functions - kept unchanged
  const handleCalculate = () => {
    // Validate inputs
    if (!regularHours || !hourlyRate) {
      setErrorMessage('Please enter hours worked and hourly rate.');
      return;
    }

    const regHours = parseFloat(regularHours);
    const otHours = parseFloat(overtimeHours || '0');
    const rate = parseFloat(hourlyRate);

    if (isNaN(regHours) || isNaN(otHours) || isNaN(rate)) {
      setErrorMessage('Please enter valid numbers.');
      return;
    }

    if (regHours < 0 || otHours < 0 || rate < 0) {
      setErrorMessage('Values cannot be negative.');
      return;
    }

    // Calculate pay
    const regularPay = regHours * rate;
    const overtimePay = otHours * (rate * 1.5); // Assuming overtime is 1.5x regular rate
    const totalPay = regularPay + overtimePay;

    setResult({
      regularPay,
      overtimePay,
      totalPay
    });
    setErrorMessage('');
  };

  const handleReset = () => {
    setRegularHours('40');
    setOvertimeHours('0');
    setHourlyRate('15');
    setErrorMessage('');
    setResult(null);
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
            <h1 className="text-2xl font-bold text-gray-800">Salary Information</h1>
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

        {/* Main Content - Salary Calculator */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <Calculator size={24} className="text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Salary Calculator</h2>
            </div>
            
            <div className="max-w-lg">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hours worked in the past week:
                </label>
                <input
                  type="text"
                  value={regularHours}
                  onChange={(e) => setRegularHours(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hours worked overtime:
                </label>
                <input
                  type="text"
                  value={overtimeHours}
                  onChange={(e) => setOvertimeHours(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hourly rate ($):
                </label>
                <input
                  type="text"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {errorMessage && (
                <div className="p-3 mb-4 bg-red-50 text-red-600 rounded-md border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={handleCalculate}
                  className="flex-1 bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator size={18} />
                  Calculate
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw size={18} />
                  Reset
                </button>
              </div>

              {result && (
                <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-md">
                  <h3 className="font-medium text-lg text-gray-800 mb-3">Results:</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-600">Regular Pay:</div>
                    <div className="text-right font-medium">${result.regularPay.toFixed(2)}</div>
                    
                    <div className="text-gray-600">Overtime Pay:</div>
                    <div className="text-right font-medium">${result.overtimePay.toFixed(2)}</div>
                    
                    <div className="font-bold text-blue-800 border-t pt-2 mt-1">Total Pay:</div>
                    <div className="text-right font-bold text-blue-800 text-lg border-t pt-2 mt-1">${result.totalPay.toFixed(2)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;