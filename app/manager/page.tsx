import Image from 'next/image'
import { ArrowRight }from "lucide-react"
import Link from 'next/link';

export default function manager () {
    return(
        <div className="bg-gradient-to-r from-teal-200 to-teal-500 h-screen">
            <div className='bg-blue-300 h-20 flex '>
                <Link className='text-xl font-bold hover:shadow-xl/20 bg-blue-200 flex justify-center items-center p-5 rounded-xl h-15 w-20 mt-2.5 ml-2'
                        href="/#">
                                Home
                </Link>
                <p className='font-bold text-4xl flex justify-center items-center w-[100%]'>Manager dashboard</p>
                
            </div>
            <div className=" w-[90%] h-[80%] translate-x-[6%] translate-y-[6%] grid grid-rows-2 grid-cols-2">

                
                {/* 3 */}
                <div className=" row-1 col-1 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md ">
                    <div className='col-1 row-1  ml-5'>
                        <Image
                            className='m-5 ml-8'
                            src="https://icons.veryicon.com/png/o/miscellaneous/effevo/attendance-1.png"
                            width={150}
                            height={150}
                            alt="Icon"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl '> Attendance view</div>
                    

                    <div className="col-2 row-1  w-60 text-xl flex flex-wrap items-center h-20 mt-12 ml-10 font-bold ">
                        <ul className='list-disc pl-6'>
                            <li>Get an overview on the attendance of your employees</li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative '>
                        <div className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'>
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className=" row-1 col-2 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md ">
                    <div className='col-1 row-1  ml-15'>
                        <Image
                            className='m-5 ml-8'
                            src="https://static.thenounproject.com/png/144676-200.png"
                            width={150}
                            height={150}
                            alt="Icon"
                        />
                    </div>

                    <div className='col-1 row-2 flex justify-center items-center mt-8 font-bold text-xl '> Leave management</div>
                    

                    <div className="col-2 row-1  w-60 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold  text-xl">
                        <ul className='list-disc pl-6'>
                            <li>Approve or disapprove an employees leave date</li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative '>
                        <div className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'>
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </div>
                    </div>
                </div>


                {/* 5 */}
                <div className=" row-2 col-1 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md ">
                    <div className='col-1 row-1  ml-15'>
                        <Image
                            className='m-5 ml-8'
                            src="https://cdn-icons-png.flaticon.com/512/5525/5525464.png"
                            width={150}
                            height={150}
                            alt="Icon"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl '> Salary</div>
                    

                    <div className="col-2 row-1  w-60 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold  text-xl">
                        <ul className='list-disc pl-6'>
                            <li>An overview on previous salaries </li>
                            <li>Easy salary calculator</li>
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative '>
                        <div className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'>
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </div>
                    </div>
                </div>


                {/* 6 */}
                <div className=" row-2 col-2 rounded-xl m-5 grid grid-rows-2 grid-cols-2 bg-yellow-50 shadow-md ">
                    <div className='col-1 row-1 m-2  ml-15'>
                        <Image
                            className='m-5 ml-8'
                            src="https://cdn-icons-png.flaticon.com/512/1/1755.png"
                            width={150}
                            height={150}
                            alt="Icon"
                        />
                    </div>

                    <div className='col-1 row-2  flex justify-center items-center mt-8 font-bold text-xl '> Information view</div>
                    

                    <div className="col-2 row-1  w-60 flex flex-wrap items-center h-20 mt-12 ml-10 font-bold  text-xl">
                        <ul className='list-disc pl-6'>
                            <li>View all personal data and information </li>
                            
                        </ul>
                    </div>
                    <div className=' col-2 row-2 relative '>
                        <div className=' border-2 flex justify-center items-center gap-2 rounded-xl w-30 h-15 p-3 absolute bottom-5 right-5 font-bold hover:underline decoration-sky-500'>
                            <p>Next</p>
                            <p><ArrowRight /></p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}