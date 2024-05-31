import React from 'react'
import radioOptions from './Preference/data'
import { townOptions, unsubOptions, keyOptions, selectOptions, countryCodes } from './Preference/data'

function Preference() {
    return (
        <main className='w-full flex flex-col items-center mb-8'>
            <div className='w-[90%]'>
                <div className='border-b py-2'>
                    <h1 className='text-[33px] font-[500]'>Newsletter settings</h1>
                </div>
                <div className='border-b py-2'>
                    <p className='text-[20px] font-[400] text-[]'>Prefences for : <span className='font-[600] text-[#000]'>voldemortrowling@gmail.com </span></p>
                </div>

                <div className='mt-10'>
                    <p>Let's not fall out of touch! How often would you like updates?</p>
                    <div className='flex gap-[24px] mt-4'>
                        {radioOptions.map((option) => (
                            <div key={option.id} className="mb-4 ">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options"
                                        value={option.value}

                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    />
                                    <span className="ml-2 text-[16px] font-[400]">{option.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* language selection  */}
                <div className='mt-20'>
                    <h1 className='text-[20px] font-[700]'>Your preference language</h1>
                    <p className='text-[16px] font-[400]'>We will show you articles  according to your prefer language.</p>
                    <div className='my-4 md:w-[20%] '>
                        <select
                            className="form-select block w-full mt-1 border border-1 rounded-lg outline-none p-1"
                        >
                            {/* <option value="" disabled>Select an option</option> */}
                            {selectOptions.map((option) => (
                                <option key={option.id} value={option.value} className='text-[14px]'>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* update from Towncrier  */}
                <div className='mt-20'>
                    <h1 className='text-[20px] font-[700]'>Updates from TownCrier</h1>
                    <p className='text-[16px] font-[400]'>Occasional product and company announcements.</p>
                    <div className='flex gap-[24px] mt-4'>
                        {townOptions.map((option) => (
                            <div key={option.id} className="mb-4 ">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options"
                                        value={option.value}

                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    />
                                    <span className="ml-2 text-[16px] font-[400]">{option.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* unsubscribe reason  */}
                <div className='mt-20'>
                    <h1 className='text-[20px] font-[700]'>Would you still like to unsubscribe? Kindly tell us why</h1>
                    <div className='flex flex-col gap-[14px] mt-4'>
                        {unsubOptions.map((option) => (
                            <div key={option.id} className="mb-2 ">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="options"
                                        value={option.value}

                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    />
                                    <span className="ml-2 text-[16px] font-[400]">{option.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* phone number  */}

                <div className='lg:w-[60%] mt-20'>
                    <h1 className='text-[20px] font-[700]'>Your phone number</h1>
                    <p className='text-[16px] font-[400]'>Stay in the loop on how to get discounts on TownCrier</p>
                    <div className=' flex-col  mt-4'>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                           <div className='flex gap-2 items-center'>
                           <select
                                //   value={selectedCountryCode}
                                //   onChange={handleCountryCodeChange}
                                className=" block w-[30%] lg:w-[30%] mt-1 lg:px-3 py-2 border text-[14px] rounded-md outline-none"
                            >
                                <option value="" disabled>Select Country Code</option>
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code} className='w-full'>
                                        {country.code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                //   value={phoneNumber}
                                //   onChange={handlePhoneNumberChange}
                                placeholder="Phone Number"
                                className="form-input block w-full mt-1 px-3 py-2 border text-[14px] border-gray-300 rounded-md"
                            />
                           </div>

                            <div className='w-full md:w-[100px]'>
                            <button className='w-full md:w-[100px] bg-[#235784] text-[#fff] rounded-[3px] text-[14px] px-3 py-2'>Update</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="options"

                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="ml-2 text-[12px] md:text-[16px] font-[400]">Add me to TownCrier WhatsApp Channel</span>
                        </label>
                    </div>
                </div>

                {/* key reasons  */}

                <div className='lg:w-[60%] mt-20'>
                    <h1 className='text-[20px] font-[700]'>Do you want to keep an eye on any other topics?</h1>
                    <p className='text-[16px] font-[400]'>Please select other topics.</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 flex-col  mt-4'>
                        {keyOptions.map((option) => (
                            <div key={option.id} className="mb-2 ">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="options"
                                        value={option.value}

                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    />
                                    <span className="ml-2 text-[12px] md:text-[16px] font-[400]">{option.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Preference