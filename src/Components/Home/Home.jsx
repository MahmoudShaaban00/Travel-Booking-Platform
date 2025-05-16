import React, { useState } from 'react';
import background from '../../assets/backgroundhome.jpg';
import { CiHeadphones } from 'react-icons/ci';
import { FaHandsHelping, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { GiTimeBomb } from 'react-icons/gi';
import { MdOutlinePayment } from 'react-icons/md';
import { FaPlane, FaCar, FaHotel, FaTaxi } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Home() {
  const navigate = useNavigate();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleFilterClickcars = () => {
    navigate('/cars');
  };

  const handleFilterClickairplane = () => {
    navigate('/airplane');
  };

  const handleFilterClickairporttaxis = () => {
    navigate('/airporttaxis');
  };

  const handleFilterClickhotels = () => {
    navigate('/hotels');
  };

  return (
    <div className="relative">
      {/* Hero Section */}
     <div
  className="relative h-[550px] w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* Full-width Navbar */}
  <div className="absolute top-0 left-0 w-full z-10">
    <Navbar />
  </div>

  {/* Hero content */}
  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
    <div className="text-center text-white px-4 mb-14 mt-24 w-full max-w-4xl">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
        <button
          onClick={handleFilterClickairplane}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          <FaPlane className="mr-2" />
          Airplane
        </button>
        <button
          onClick={handleFilterClickcars}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          <FaCar className="mr-2" />
          Cars
        </button>
        <button
          onClick={handleFilterClickhotels}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500"
        >
          <FaHotel className="mr-2" />
          Hotels
        </button>
        <button
          onClick={handleFilterClickairporttaxis}
          className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500"
        >
          <FaTaxi className="mr-2" />
          Airport Taxis
        </button>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl text-neutral-950 font-bold mb-4">
        Your One-Stop Solution for Booking Tickets, Hotels, and Taxis
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-10">
        Book your travel tickets, find the best hotels, and arrange taxis all in one place.
      </p>
    </div>
  </div>
</div>


      {/* Feature Section 1 */}
      <div className="md:px-32 px-10 mt-20 md:flex justify-around flex-wrap font-serif">
        <div className="lg:w-1/4 md:w-1/2 mb-10" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <CiHeadphones className="w-16 h-16 text-gray-600" />
          <h1 className="text-xl text-[#0B4261] text-left">We Value Your Feedback</h1>
          <p className="bg-[#0B4261] w-16 my-3 h-1"></p>
          <p className="text-left">
            Our team is dedicated to improving your travel experience—your feedback helps us tailor better hotel, taxi,
            car, and flight bookings.
          </p>
        </div>

        <div className="lg:w-1/4 md:w-1/2 mb-10" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <FaHandsHelping className="w-16 h-16 text-gray-600" />
          <h1 className="text-xl text-[#0B4261] text-left">Service Wherever You Are</h1>
          <p className="bg-[#0B4261] w-16 my-3 h-1"></p>
          <p className="text-left">
            Whether you're booking a flight, renting a car, or finding a hotel, our support team is here for you 24/7.
          </p>
        </div>

        <div className="lg:w-1/4 md:w-1/2 mb-10" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          <GiTimeBomb className="w-16 h-16 text-gray-600" />
          <h1 className="text-xl text-[#0B4261] text-left">Book Anytime, Anywhere</h1>
          <p className="bg-[#0B4261] w-16 my-3 h-1"></p>
          <p className="text-left">
            Easily access our booking platform from anywhere at any time—convenience is at your fingertips.
          </p>
        </div>
      </div>

      {/* Feature Section 2 */}
      <div className="md:px-32 px-10 mb-10 lg:flex justify-around flex-wrap font-serif">
        <div className="lg:w-1/4 md:w-1/2 mt-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <FaDollarSign className="w-16 h-16 text-gray-600 mb-1" />
          <h1 className="text-xl text-[#0B4261] text-left">Transparent Pricing</h1>
          <p className="bg-[#0B4261] w-16 my-3 h-1"></p>
          <p className="text-left">
            All ticket prices for flights, hotels, cars, and taxis are clearly displayed before you confirm your
            booking.
          </p>
        </div>

        <div className="lg:w-1/4 md:w-1/2 mt-12" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <FaMapMarkerAlt className="w-16 h-16 text-gray-600" />
          <h1 className="text-xl text-[#0B4261] text-left">Track Your Booking</h1>
          <p className="bg-[#0B4261] w-16 my-3 h-1"></p>
          <p className="text-left">
            See the status and details of your bookings instantly—track taxis, view hotel info, and check flight
            updates easily.
          </p>
        </div>

        <div className="lg:w-1/4 md:w-1/2 mt-12" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          <MdOutlinePayment className="w-16 h-16 text-gray-600" />
          <h1 className="text-xl text-[#0B4261] text-left">Flexible Payment Options</h1>
          <p className="bg-[#0B4261] w-16 my-3 h-1"></p>
          <p className="text-left">
            Pay the way you prefer—credit card, online wallet, loyalty points, or cash upon service completion.
          </p>
        </div>
      </div>
    </div>
  );
}
