export default function Footer() {
    return (
        <div className="h-[30rem] bg-black mt-5">
            <div className="grid grid-cols-4 container mx-auto pl-[16rem] pr-[231px]">
                <div className="mt-10 text-white">
                    <div className="flex">
                        <img src="/whiteSwiggy.svg" alt="" />
                        <p className=" font-bold text-xl ms-2">Swiggy</p>
                    </div>
                    <p className=" w-[14rem] text-[#9A9B9E]">© 2024 Bundl Technologies Pvt. Ltd</p>
                </div>
                <div className="text-white mt-10">
                    <p className="mb-2">Company</p>
                    <div className="text-[#9A9B9E]">
                        <p className="mb-2">About</p>
                        <p className="mb-2">Careers</p>
                        <p className="mb-2">Team</p>
                        <p className="mb-2">Swiggy one</p>
                        <p className="mb-2">Swiggy Instamart</p>
                        <p className="mb-2">swiggy Genie</p>
                    </div>

                </div>
                <div className="text-white mt-10">
                    <p className="mb-2">Contact us</p>
                    <div className="mb-10 text-[#9A9B9E]">
                        <p className="mb-2">Help & Support</p>
                        <p className="mb-2">Partner with us</p>
                        <p className="mb-2">Ride with us</p>
                    </div>
                    <p className="mb-2">Legal</p>
                    <div className="text-[#9A9B9E]">
                        <p className="mb-2">Terms & Conditions</p>
                        <p className="mb-2">Cookie Policy</p>
                        <p className="mb-2">Privacy policy</p>
                        <p className="mb-2">Investor Relations</p>
                    </div>
                </div>
                <div className="text-white mt-10">
                    <p className="mb-2">We deliver to :</p>
                    <div className="text-[#9A9B9E]">
                        <p className="mb-2">Bangalore</p>
                        <p className="mb-2">Gurgaon</p>
                        <p className="mb-2">Hyderabad</p>
                        <p className="mb-2">Delhi</p>
                        <p className="mb-2">Mumbai</p>
                        <p className="mb-2">Pune</p>
                        <button className="border border-white px-2">589 cities</button>
                    </div>

                </div>
            </div>
        </div>

    )
};