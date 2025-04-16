import Image from 'next/image'
import { ArrowRight }from "lucide-react"
import Link from 'next/link';

export default function employee () {
    return(
        <div className="bg-gradient-to-r from-teal-200 to-teal-500 h-screen">
            <div className='bg-blue-300 h-20 flex '>
                <Link className='text-xl font-bold hover:shadow-xl/20 bg-blue-200 flex justify-center items-center p-5 rounded-xl h-15 w-20 mt-2.5 ml-2'
                        href="/#">
                                Home
                </Link>
                <p className='font-bold text-4xl flex justify-center items-center w-[100%]'>Employee dashboard</p>
                
            </div>
            <div className=" w-[90%] h-[80%] translate-x-[6%] translate-y-[6%] grid grid-rows-2 grid-cols-3">

                {/* 1 */}
                <div className=" row-1 col-1 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md">
                    <div className='col-1 row-1 '>
                        <Image
                            className='m-5 ml-8'
                            src="https://cdn-icons-png.flaticon.com/512/5137/5137377.png"
                            width={150}
                            height={150}
                            alt="PSU Logo"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl'> Information input</div>
                    

                    <div className="col-2 row-1  w-40 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold ">
                        <ul className='list-disc pl-6'>
                            <li>Add data </li>
                            <li>Add information</li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative'>
                        <Link className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'
                                href="/employee/information-input">
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </Link>
                    </div>
                </div>
                
                {/* 2 */}
                <div className=" row-1 col-2 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md">
                    <div className='col-1 row-1 m-4 '>
                        <Image
                            className='m-5 ml-8'
                            src="https://cdn-icons-png.flaticon.com/512/2807/2807708.png"
                            width={150}
                            height={150}
                            alt="PSU Logo"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl'> Edit information</div>
                    

                    <div className="col-2 row-1  w-40 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold ">
                        <ul className='list-disc pl-6'>
                            <li>Edit personal data and information </li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative'>
                        <Link className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'
                                href="/employee/information-edit">
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </Link>
                    </div>
                </div>

                {/* 3 */}
                <div className=" row-1 col-3 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md">
                    <div className='col-1 row-1 '>
                        <Image
                            className='m-5 ml-8'
                            src="https://icons.veryicon.com/png/o/miscellaneous/effevo/attendance-1.png"
                            width={150}
                            height={150}
                            alt="PSU Logo"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl'> Attendance menu</div>
                    

                    <div className="col-2 row-1  w-40 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold ">
                        <ul className='list-disc pl-6'>
                            <li>Choose if you are present or leave </li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative'>
                        <Link className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'
                                href="/employee/Attendance-dashboard">
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </Link>
                    </div>
                </div>

                {/* 4 */}
                <div className=" row-2 col-1 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md">
                    <div className='col-1 row-1 '>
                        <Image
                            className='m-5 ml-8'
                            src="https://static.thenounproject.com/png/144676-200.png"
                            width={150}
                            height={150}
                            alt="PSU Logo"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl'> Leave management</div>
                    

                    <div className="col-2 row-1  w-40 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold ">
                        <ul className='list-disc pl-6'>
                            <li>Choose what date you want to leave </li>
                            <li>Wait for approval </li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative'>
                        <Link className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'
                                href="/employee/Leave-managemant">
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </Link>
                    </div>
                </div>


                {/* 5 */}
                <div className=" row-2 col-2 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md">
                    <div className='col-1 row-1 '>
                        <Image
                            className='m-5 ml-8'
                            src="https://cdn-icons-png.flaticon.com/512/5525/5525464.png"
                            width={150}
                            height={150}
                            alt="PSU Logo"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl'> Salary</div>
                    

                    <div className="col-2 row-1  w-40 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold ">
                        <ul className='list-disc pl-6'>
                            <li>An overview on previous salaries </li>
                            <li>Easy salary calculator</li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative'>
                        <Link className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'
                                href="/employee/Salary-history">
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </Link>
                    </div>
                </div>


                {/* 6 */}
                <div className=" row-2 col-3 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md">
                    <div className='col-1 row-1 m-2'>
                        <Image
                            className='m-5 ml-8'
                            src="https://cdn-icons-png.flaticon.com/512/1/1755.png"
                            width={150}
                            height={150}
                            alt="PSU Logo"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl'> Information view</div>
                    

                    <div className="col-2 row-1  w-40 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold ">
                        <ul className='list-disc pl-6'>
                            <li>View all personal data and information </li>
                            
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative'>
                        <Link className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'
                                href="/employee/Information-view">
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </Link>
                    </div>
                </div>

            </div>


        </div>
    )
}