export default function Navbar() {
    return (
        <div className="shadow mb-4 p-3">
            <div className="flex justify-between mx-auto px-24">
                <div className="flex">
                    <img src="/swiggy.svg" alt="" width={30}></img>
                    <div className="flex">
                        <p className="mx-4 mt-2 underline underline-offset-8">Other</p>
                        <img src="/darrow.svg" width={15}></img>
                    </div>
                </div>

                <div className="flex mt-2">
                    <p className="mx-8 inline-flex items-center">
                        <img src="/bag.svg" className="mr-2" /> Swiggy Corporate
                    </p>
                    <p className="mx-8 inline-flex items-center">
                        <img src="/search.svg" className="mr-2" /> Search
                    </p>
                    <p className="mx-8 inline-flex items-center">
                        <img src="/offers.svg" className="mr-2" /> Offers
                    </p>
                    <p className="mx-8 inline-flex items-center">
                        <img src="/help.svg" className="mr-2" /> Help
                    </p>
                    <p className="mx-8 inline-flex items-center">
                        <img src="/user.png" width={20} className="mr-2" /> Sign In
                    </p>
                    <p className="mx-8 inline-flex items-center">
                        <img src="/cart.svg" className="mr-2" /> Cart
                    </p>
                </div>

            </div>
        </div>
    )
};