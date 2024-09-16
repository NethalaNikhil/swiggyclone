function hotelDetails() {
    const restaurantDetails = [
        {
            id: 1,
            resDiscount: '20% OFF UPTO ₹50',
            resName: 'KFC',
            resRating: '4.2 .30-35 mins',
            resFoodAvail: 'Burgers,Fast Food, Rolls & wraps',
            resplace: 'Mehdipatnam',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17105.JPG'
        },
        {
            id: 2,
            resDiscount: '15% OFF',
            resName: 'Theobroma',
            resRating: '4.6 .40-45 mins',
            resFoodAvail: 'Desserts',
            resplace: 'Banjara Hills',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63dd75492c47fcec191132b8eb299ea5'
        },
        {
            id: 3,
            resDiscount: '60% OFF UPTO ₹120',
            resName: 'Burger King',
            resRating: '4.1 .25-30 mins',
            resFoodAvail: 'Burgers,American',
            resplace: 'Attapur',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG'
        },
        {
            id: 4,
            resDiscount: 'ITEMS AT ₹189',
            resName: 'Pizza Hut',
            resRating: '4.1 .30-35 mins',
            resFoodAvail: 'Pizzas',
            resplace: 'Attapur',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg'
        },
        {
            id: 5,
            resDiscount: '25% OFF',
            resName: 'Domino\'s Pizza',
            resRating: '4.3 .30-40 mins',
            resFoodAvail: 'Pizzas, Fast Food',
            resplace: 'Kukatpally',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/e45f5835-51a9-4270-8439-9b0432b01ce3_681605.jpg'
        },
        {
            id: 6,
            resDiscount: 'BUY 1 GET 1 FREE',
            resName: 'Subway',
            resRating: '4.0 .20-25 mins',
            resFoodAvail: 'Salads, Sandwiches',
            resplace: 'Gachibowli',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b9c7807f-59bb-4e91-83d4-5048d293f44e_12126.JPG'
        },
        {
            id: 7,
            resDiscount: 'FLAT ₹100 OFF',
            resName: 'Paradise Biryani',
            resRating: '4.5 .35-40 mins',
            resFoodAvail: 'Biryani, Indian',
            resplace: 'Secunderabad',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/e882bf86-5a9d-4515-b139-d19a155778e7_647286.JPG'
        },
        {
            id: 8,
            resDiscount: '10% OFF UPTO ₹30',
            resName: 'Barbeque Nation',
            resRating: '4.7 .50-55 mins',
            resFoodAvail: 'Barbeque, Indian',
            resplace: 'Jubilee Hills',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/13/956cf6a8-8ce2-485c-9856-34c668e2c1d5_e0bcb68f-069f-469d-b915-98ec8d896594.JPG'
        },
        {
            id: 9,
            resDiscount: 'UPTO 50% OFF',
            resName: 'Shah Ghouse',
            resRating: '4.3 .40-45 mins',
            resFoodAvail: 'Biryani, Mughlai',
            resplace: 'Tolichowki',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ks4d93rjtcbitkzkbqx0'
        },
        {
            id: 10,
            resDiscount: '20% OFF UPTO ₹100',
            resName: 'Karachi Bakery',
            resRating: '4.8 .20-25 mins',
            resFoodAvail: 'Bakery, Desserts',
            resplace: 'Banjara Hills',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/13/d00d5f8d-53a0-475c-90e1-49bda593c03a_10060.jpg'
        },
        {
            id: 11,
            resDiscount: 'FLAT ₹50 OFF',
            resName: 'Chicking',
            resRating: '4.0 .25-30 mins',
            resFoodAvail: 'Fried Chicken, Fast Food',
            resplace: 'Begumpet',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/7f12ee71155404342aae2ee952348778'
        },
        {
            id: 12,
            resDiscount: '25% OFF UPTO ₹75',
            resName: 'Cream Stone',
            resRating: '4.4 .30-35 mins',
            resFoodAvail: 'Ice Cream, Desserts',
            resplace: 'Madhapur',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/fpg1axsbums6783pltg1'
        },
        {
            id: 13,
            resDiscount: '20% OFF UPTO ₹50',
            resName: 'Dunkin\' Donuts',
            resRating: '4.1 .20-25 mins',
            resFoodAvail: 'Donuts, Coffee',
            resplace: 'Kondapur',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/14/181ca5d8-39a1-4ffc-acb8-781121280e75_22744.jpg'
        },
        {
            id: 14,
            resDiscount: 'FLAT ₹75 OFF',
            resName: 'Starbucks',
            resRating: '4.6 .30-40 mins',
            resFoodAvail: 'Coffee, Snacks',
            resplace: 'Gachibowli',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/97f4ae400f7ddc0e2e29b5705e7c679a'
        },
        {
            id: 15,
            resDiscount: '30% OFF UPTO ₹120',
            resName: 'Wow! Momo',
            resRating: '4.2 .25-30 mins',
            resFoodAvail: 'Momos, Chinese',
            resplace: 'Hitech City',
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/97f4ae400f7ddc0e2e29b5705e7c679a'
        }
    ];

    return (
        <>
            <div className="container mx-auto pl-48 pr-[231px]">
                <p className="text-xl font-bold">Restaurants with online food delivery in Hyderabad</p>
                <div>
                    {/* buttons */}
                </div>
                <div className="grid grid-cols-4 gap-1">
                    {/* Restaurants details */}
                    {restaurantDetails.map((restaurant) => (
                        <div key={restaurant.id}>
                            <div className="mt-5">
                                <div className="relative w-[220px]">
                                    <img src={restaurant.image} width={250} className="rounded-lg shadow shadow-black h-48" alt={restaurant.resName} />
                                    <p
                                        className="font-bold text-xl absolute bottom-0 left-0 p-1 z-10 text-white w-full rounded-lg"
                                        style={{
                                            background: "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)",
                                        }}
                                    >
                                        {restaurant.resDiscount}
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <p className="font-bold">{restaurant.resName}</p>
                                    <span className="font-bold flex items-center">
                                        <img src="/start.svg" width={15} className="mr-1" alt="star" />
                                        {restaurant.resRating}
                                    </span>
                                    <p>{restaurant.resFoodAvail}</p>
                                    <p>{restaurant.resplace}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>

    )
}
export default hotelDetails