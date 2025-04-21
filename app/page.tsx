'use client'
import { CircleDot } from "lucide-react"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function EMS() {
  const router = useRouter();
  
  const [role, setRole] = useState<"manager" | "employee" | null>(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  // Generate a new manager ID when switching to registration mode
  useEffect(() => {
    if (isRegistering && role === "manager") {
      // Generate a random number between 1000 and 9999 for the manager ID
      const randomId = Math.floor(Math.random() * 9000) + 1000;
      const newManagerId = `M${randomId}`;
      setId(newManagerId);
    }
  }, [isRegistering, role]);

  const handleSubmit = () => {
    if (isRegistering) {
      // Registration validation
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      
      if (!name || !email || !phone) {
        alert("All fields are required!");
        return;
      }
      
      console.log("Registering as:", role);
      console.log("ID:", id);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      
      // TODO: Add registration logic here (API call, database update, etc.)
      
      // Reset form and switch back to login
      setIsRegistering(false);
      setPassword("");
      setConfirmPassword("");
      setName("");
      setEmail("");
      setPhone("");
      
      // Route to manager page after successful registration
      router.push('/manager');
    } else {
      // Login logic
      if (role === "manager") {
        router.push('/manager');
      } else {
        router.push('/employee');
      }
      console.log("Logging in as:", role);
      console.log("ID:", id);
      console.log("Password:", password);
      // TODO: Add your login logic here (API call, validation, etc.)
    }
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
                onClick={() => {
                  setRole("manager");
                  setIsRegistering(false);
                  setPassword("");
                  setConfirmPassword("");
                  setName("");
                  setEmail("");
                  setPhone("");
                  setId("");
                }}>
                Manager
              </button>
              <button 
                className={`flex-1 py-2 rounded-lg border ${role === "employee" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={() => {
                  setRole("employee");
                  setIsRegistering(false);
                  setPassword("");
                  setConfirmPassword("");
                  setName("");
                  setEmail("");
                  setPhone("");
                  setId("");
                }}>
                Employee
              </button>
            </div>
          </div>
          
          {role && (
            <div className="space-y-4">
              <h2 className="text-lg font-medium">
                {isRegistering ? 'Register as ' : ''}{role.charAt(0).toUpperCase() + role.slice(1)} {isRegistering ? '' : 'Login'}
              </h2>
              
              <div className="flex flex-col">
                <label className="mb-1">{role.charAt(0).toUpperCase() + role.slice(1)} ID:</label>
                <input 
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                  disabled={isRegistering && role === "manager"} // Disable editing for auto-generated manager IDs
                />
                {isRegistering && role === "manager" && (
                  <p className="text-xs text-gray-500 mt-1">ID is automatically generated</p>
                )}
              </div>
              
              {/* Additional registration fields for manager */}
              {isRegistering && role === "manager" && (
                <>
                  <div className="flex flex-col">
                    <label className="mb-1">Full Name:</label>
                    <input 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="mb-1">Email:</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="mb-1">Phone Number:</label>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                    />
                  </div>
                </>
              )}
              
              <div className="flex flex-col">
                <label className="mb-1">Password:</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                />
              </div>
              
              {/* Confirm password field for registration */}
              {isRegistering && role === "manager" && (
                <div className="flex flex-col">
                  <label className="mb-1">Confirm Password:</label>
                  <input 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="px-3 py-2 border-2 bg-gray-100 rounded-lg"
                  />
                </div>
              )}
              
              <button 
                onClick={handleSubmit}
                className="w-full py-2 text-white bg-blue-600 rounded-lg">
                {isRegistering ? 'Register' : 'Login'}
              </button>
              
              {/* Only show register option for manager role */}
              {role === "manager" && (
                <div className="text-center mt-2">
                  <button 
                    onClick={() => {
                      setIsRegistering(!isRegistering);
                      setPassword("");
                      setConfirmPassword("");
                      setName("");
                      setEmail("");
                      setPhone("");
                    }}
                    className="text-blue-600 hover:underline">
                    {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="rounded-xl p-5 z-1 bg-white translate-x-[20%] translate-y-[0%]">
        <div className="font-bold text-2xl ml-3 text-shadow-md text-shadow-orange-200">Get access to</div>
        
        <div className="rounded-xl p-10 z-1 bg-white">
          <ul className="list-disc">
            <li>your data</li>
            <li className="mt-2">personal information</li>
            <li className="mt-2">attendance and leave management</li>
            <li className="mt-2">salary history</li>
          </ul>
        </div>
      </div>
    </div>
  )
}