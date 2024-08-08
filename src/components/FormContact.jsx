// import React from 'react'


const FormContact = () => {
    return (
            <form className="flex flex-col gap-6 max-w-[540px] w-full">
                <div className="flex gap-[30px] w-full">
                    <label htmlFor="name">
                        <input className="text-[16px] pr-[50px] leading-[19px] placeholder:text-[#132743] placeholder:text-opacity-50 pl-[31px] pt-[20px] pb-[21px] border border-[#333333] rounded-md" id="name" type="text" name='FirstName' placeholder="First Name" />
                    </label>
                    <label htmlFor="lastname">
                        <input className="text-[16px] pr-[50px] leading-[19px] placeholder:text-[#132743] placeholder:text-opacity-50 pl-[31px] pt-[20px] pb-[21px] border border-[#333333] rounded-md" id="lastname" type="text" name='LastName' placeholder="Last Name" />
                    </label>
                </div>
                
                <label htmlFor="phoneNumber">
                    <input className="text-[16px] w-full leading-[19px] placeholder:text-[#132743] placeholder:text-opacity-50 pl-[31px] pt-[20px] pb-[21px] border border-[#333333] rounded-md" type="tel" id="phoneNumber" name="PhoneNumber" placeholder="Phone Number" aria-label="phoneNumber"/>
                </label>
                
                <select className="w-full pl-[31px] pt-[20px] text-[#132743] text-[16px] leading-[19px] text-opacity-50 pb-[21px] border border-[#333333] rounded-md">
                    <option selected>Select Service</option>
                    <option value="overview">Overview</option>
                    <option value="features">Features</option>
                    <option value="technology">technology</option>
                    <option value="Terms">Terms</option>
                    <option value='Conditions'>Conditions</option>
                    <option value='Privecy'>Privecy</option>
                </select>
                
                <button className="font-normal text-[14px] leading-[16px] text-white bg-[#ED4C5C] border-[1.5px] border-[#ED4C5C] rounded-md pt-[17px] pb-4 px-8 inline-flex mr-auto" type="submit">
                    Submit Now
                </button>
            </form>  
    )
}

export default FormContact