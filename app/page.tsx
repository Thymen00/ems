'use client'

import { CircleDot }from "lucide-react"
import { useState } from 'react';
import Image from 'next/image'

export default function EMS () {

  const [role, setRole] = useState<"manager" | "employee" | null>(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Role:", role);
    console.log("ID:", id);
    console.log("Password:", password);
    // TODO: Add your login logic here (API call, validation, etc.)
  };

  return(
    <div className="bg-linear-to-t from-sky-500 to-indigo-500 h-screen " >
      <div className=" text-5xl font-bold flex items-center gap-50 h-30 ">
        <Image
          className='p-2 m-4 '
          src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
          width={150}
          height={150}
          alt="PSU Logo"
        />
        Employee Management System</div>
        
          <div  className="bg-green-100 border-2 rounded-xl w-40 grid gap-10 m-10 p-3">
            <p className="flex" > Choose: </p>
              <div className="grid gap-10 ">
                <div className=" flex gap-2"><button onClick={() => setRole("manager")}><p className="hover:bg-blue-300 rounded-xl"><CircleDot /></p></button><p className="mt-1">Manager</p></div>
                <div className=" flex gap-2"><button onClick={() => setRole("employee")}><p className="hover:bg-blue-300 rounded-xl"><CircleDot /></p></button><p className="mt-1">Employee</p></div>
              </div>
          </div>

          {role && (
        <div className="bg-transparent border-2 rounded p-5 w-[30%] grid gap-5 m-10">
          <h3 className="font-bold text-xl">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h3>
          <div>{role.charAt(0).toUpperCase() + role.slice(1)} ID:
          <input
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-2 bg-gray-300 rounded-lg ml-5"
          />
          </div>

          <div>{role.charAt(0).toUpperCase() + role.slice(1)} password:
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 bg-gray-300 rounded-lg ml-5"
          />
            <p className="border-2 rounded-xl w-20 h-8 flex justify-center align-center bg-blue-200 mt-5">
              <button onClick={handleSubmit}>Login</button>
            </p>
          </div>

          
        </div>

      )}

          {/* <div className="bg-red-200 border-2 p-5 w-[60%] gap-10">
              <div className="font-bold text-xl">
                <p>Manager login</p>
              </div>  
              <div className="flex flex-nowrap mt-5 gap-10">
                <p className="" >Manager ID: 
                  <input
                  className="border-2 bg-gray-300 rounded-lg ml-5"
                  />
                </p>
                <p className="" >Manager password:
                  <input
                  className="border-2 bg-gray-300 rounded-lg ml-5"
                  />
                </p>
              </div>  
            </div>

            <div className="bg-yellow-200 border-2 p-5 w-[60%] gap-10">
              <div className="font-bold text-xl">
                <p>Employee login</p>
              </div>  
              <div className="flex flex-nowrap mt-5 gap-10">
                <p className="" >Employee ID: 
                  <input
                  className="border-2 bg-gray-300 rounded-lg ml-5"
                  />
                </p>
                <p className="" >Employee password:
                  <input
                  className="border-2 bg-gray-300 rounded-lg ml-5"
                  />
                </p>
              </div>  
            </div> */}

    </div>
  )
}