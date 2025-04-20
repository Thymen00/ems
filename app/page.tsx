'use client'
import { CircleDot } from "lucide-react"
import { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function EMS() {
  const router = useRouter();
  
  const [role, setRole] = useState<"manager" | "employee" | null>(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (role === "manager") {
      router.push('/manager');
    } else {
      router.push('/employee');
    }
    console.log("Role:", role);
    console.log("ID:", id);
    console.log("Password:", password);
    // TODO: Add your login logic here (API call, validation, etc.)
  };

  return(
    <div className="relative flex items-center justify-center w-screen h-screen">
      {/* Background Image */}
      <div className="absolute w-[90%] h-[90%] overflow-hidden ">
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Office Background"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        </div>
      </div>
      
      <div className="z-10 flex flex-col items-center p-8 bg-white bg-opacity-90 rounded-xl shadow-xl w-96 ml-100">
        <h1 className="mb-6 text-2xl font-bold text-center">Employee Management System</h1>
        
        <div className="w-full">
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-medium">Choose:</h2>
            <div className="flex space-x-4">
              <button 
                className={`flex-1 py-2 rounded-lg border ${role === "manager" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={() => setRole("manager")}>
                Manager
              </button>
              <button 
                className={`flex-1 py-2 rounded-lg border ${role === "employee" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={() => setRole("employee")}>
                Employee
              </button>
            </div>
          </div>
          
          {role && (
            <div className="space-y-4">
              <h2 className="text-lg font-medium">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
              
              <div className="flex flex-col">
                <label className="mb-1">{role.charAt(0).toUpperCase() + role.slice(1)} ID:</label>
                <input 
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                />
              </div>
              
              <div className="flex flex-col">
                <label className="mb-1">{role.charAt(0).toUpperCase() + role.slice(1)} password:</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                />
              </div>
              
              <button 
                onClick={handleSubmit}
                className="w-full py-2 text-white bg-blue-600 rounded-lg">
                Login
              </button>
            </div>
          )}
          
          
          
        </div>
      </div>
      
        <div className=" rounded-xl p-5  z-1 bg-white translate-x-[20%] translate-y-[0%]">
          <div className="font-bold text-2xl ml-3 text-shadow-md text-shadow-orange-200">Get access to</div>
          
            <div className="  rounded-xl p-10  z-1 bg-white ">
              
                <ul className="list-disc ">
                  <li >your data</li>
                  <li className="mt-2">personal information</li>
                  <li className="mt-2">attendance and leave management</li>
                  <li className="mt-2">salary history</li>
                </ul>
              
            </div>
      </div>
    </div>
  )
}