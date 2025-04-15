'use client'

import { CircleDot }from "lucide-react"
import { useState } from 'react';
import Image from 'next/image'
// import Link from 'next/link';
import { useRouter } from 'next/navigation'


export default function EMS () {

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
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen " >
      <div className=" text-5xl font-bold flex items-center gap-50 h-30 font-serif">
        <Image
          className='p-2 m-4 '
          src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
          width={150}
          height={150}
          alt="PSU Logo"
        />
        Employee Management System</div>
      <div style={{display:'grid', gridTemplateColumns: '60% 40%'}}>
          <div  className="bg-green-100 border-2 rounded-xl w-40 grid gap-10 m-10 ml-25 p-3 h-50">
            <p className="flex text-xl font-bold" > Choose: </p>
              <div className="grid gap-10 ">
                <div className=" flex gap-2"><button onClick={() => setRole("manager")}><p className="hover:bg-blue-300 rounded-xl focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"><CircleDot /></p></button><p className="mt-1">Manager</p></div>
                <div className=" flex gap-2"><button onClick={() => setRole("employee")}><p className="hover:bg-blue-300 rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"><CircleDot /></p></button><p className="mt-1">Employee</p></div>
              </div>
          </div>

          {role && (
        <div className="bg-transparent border-2 rounded p-5 w-[30%] grid gap-5 m-25 grid col-1 -mt-50">
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
          
            <div className="border-2 rounded-xl w-20 h-8 flex justify-center align-center bg-blue-200 mt-5 hover:bg-blue-300">
          
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>

          
        </div> 
      )}
      
        <div className=" grid col-2 row-1 rounded-xl w-120 h-100 bg-red-50 mt-20 shadow-xl/30">
          <div className="font-bold text-5xl grid col-2 row-1  w-80 flex items-end text-shadow-md text-shadow-orange-200 mb-10 h-20">Get acces to 

          </div>
          <div className="text-xl grid col-2 row-2 w-100 mb-10 flex items-start ml-5 gap-3 ">
            <p>- your data</p>
            <p>- personal information</p>
            <p>- attendance and leave management</p>
            <p>- salary history</p>
          </div>
        </div>
      </div>
    </div>
  )
}