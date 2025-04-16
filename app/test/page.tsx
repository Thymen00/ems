// 'use client'

// import { useState } from 'react';

// export default function SalaryCalculator() {
//   const [regularHours, setRegularHours] = useState('40');
//   const [overtimeHours, setOvertimeHours] = useState('0');
//   const [hourlyRate, setHourlyRate] = useState('15');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [result, setResult] = useState<null | {
//     regularPay: number,
//     overtimePay: number,
//     totalPay: number
//   }>(null);

//   const handleCalculate = () => {
//     // Validate inputs
//     if (!regularHours || !hourlyRate) {
//       setErrorMessage('Please enter hours worked and hourly rate.');
//       return;
//     }

//     const regHours = parseFloat(regularHours);
//     const otHours = parseFloat(overtimeHours || '0');
//     const rate = parseFloat(hourlyRate);

//     if (isNaN(regHours) || isNaN(otHours) || isNaN(rate)) {
//       setErrorMessage('Please enter valid numbers.');
//       return;
//     }

//     if (regHours < 0 || otHours < 0 || rate < 0) {
//       setErrorMessage('Values cannot be negative.');
//       return;
//     }

//     // Calculate pay
//     const regularPay = regHours * rate;
//     const overtimePay = otHours * (rate * 1.5); // Assuming overtime is 1.5x regular rate
//     const totalPay = regularPay + overtimePay;

//     setResult({
//       regularPay,
//       overtimePay,
//       totalPay
//     });
//     setErrorMessage('');
//   };

//   const handleReset = () => {
//     setRegularHours('40');
//     setOvertimeHours('0');
//     setHourlyRate('15');
//     setErrorMessage('');
//     setResult(null);
//   };

//   return (
//     <div className="w-full max-w-md p-6 bg-white rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Salary Calculator</h2>
      
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Hours worked in the past week:</label>
//         <input
//           type="text"
//           value={regularHours}
//           onChange={(e) => setRegularHours(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium mb-1">Hours worked overtime:</label>
//         <input
//           type="text"
//           value={overtimeHours}
//           onChange={(e) => setOvertimeHours(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block font-medium mb-1">Hourly rate ($):</label>
//         <input
//           type="text"
//           value={hourlyRate}
//           onChange={(e) => setHourlyRate(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       {errorMessage && (
//         <div className="text-red-500 mb-4">{errorMessage}</div>
//       )}

//       <div className="flex space-x-4">
//         <button
//           onClick={handleCalculate}
//           className="flex-1 bg-indigo-200 text-black font-medium py-3 rounded hover:bg-indigo-300 transition-colors"
//         >
//           Calculate
//         </button>
//         <button
//           onClick={handleReset}
//           className="flex-1 bg-indigo-200 text-black font-medium py-3 rounded hover:bg-indigo-300 transition-colors"
//         >
//           Cancel
//         </button>
//       </div>

//       {result && (
//         <div className="mt-6 p-4 bg-gray-100 rounded">
//           <h3 className="font-bold mb-2">Results:</h3>
//           <div className="grid grid-cols-2 gap-1">
//             <div>Regular Pay:</div>
//             <div className="text-right">${result.regularPay.toFixed(2)}</div>
            
//             <div>Overtime Pay:</div>
//             <div className="text-right">${result.overtimePay.toFixed(2)}</div>
            
//             <div className="font-bold">Total Pay:</div>
//             <div className="text-right font-bold">${result.totalPay.toFixed(2)}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown } from "lucide-react"

// Define a type for each dropdown item
type DropdownItem = {
    id: number;
    title: string;
    content: string;
};

const DropdownComponent = () => {
  // State to track which dropdown is open (using ID), or null if none
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  
  // States for salary calculator
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

  // Salary calculator functions
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
    <div className='bg-blue-100 h-screen'>
      <div className="grid grid-cols-[20%_80%] grid-rows-[12.5%_87.5%] w-[100%] h-[100%] ">
        <div className='flex col-span-2 border-b'>
          <Link className='text-xl font-bold hover:shadow-xl/20 bg-blue-200 flex justify-center items-center p-5 rounded-xl h-15 w-30 mt-2.5 ml-2'
            href="/employee">
            Return to dashboard
          </Link>
          <p className='font-bold text-4xl flex justify-center items-center w-[100%]'>Edit information</p>
        </div>
        
        {/* Left sidebar - unchanged */}
        <div className="grid col-1 row-2 bg-gradient-to-r from-slate-200 to-slate-300">
          <p className='font-bold text-2xl h-15 flex justify-center items-center underline'>Menu</p>
          
          {/* Map through dropdown items to create multiple independent dropdowns */}
          {dropdownItems.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center h-fit cursor-pointer"
                onClick={() => handleDropdownClick(item.id)}
              >
                <div className="mr-2">
                  {openDropdownId === item.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
                <span className="font-bold">{item.title}</span>
              </div>
              
              {openDropdownId === item.id && (
                <div className="border-t border-blue-400 h-fit p-3">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Main content area - column 2, row 2 - Only showing salary calculator */}
        <div className="col-start-2 row-start-2 p-6">
          {/* Salary Calculator */}
          <div className="w-full max-w-md p-6 bg-white rounded shadow mx-auto">
            <h3 className="text-xl font-bold mb-4">Salary Calculator</h3>
            
            <div className="mb-4">
              <label className="block font-medium mb-1">Hours worked in the past week:</label>
              <input
                type="text"
                value={regularHours}
                onChange={(e) => setRegularHours(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Hours worked overtime:</label>
              <input
                type="text"
                value={overtimeHours}
                onChange={(e) => setOvertimeHours(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-1">Hourly rate ($):</label>
              <input
                type="text"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}

            <div className="flex space-x-4">
              <button
                onClick={handleCalculate}
                className="flex-1 bg-indigo-200 text-black font-medium py-3 rounded hover:bg-indigo-300 transition-colors"
              >
                Calculate
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-indigo-200 text-black font-medium py-3 rounded hover:bg-indigo-300 transition-colors"
              >
                Cancel
              </button>
            </div>

            {result && (
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <h3 className="font-bold mb-2">Results:</h3>
                <div className="grid grid-cols-2 gap-1">
                  <div>Regular Pay:</div>
                  <div className="text-right">${result.regularPay.toFixed(2)}</div>
                  
                  <div>Overtime Pay:</div>
                  <div className="text-right">${result.overtimePay.toFixed(2)}</div>
                  
                  <div className="font-bold">Total Pay:</div>
                  <div className="text-right font-bold">${result.totalPay.toFixed(2)}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownComponent;