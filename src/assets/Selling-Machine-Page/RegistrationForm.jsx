
import { FaUserTie, FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import Timer from './Timer';


const RegistrationForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log("hoyeche")
    };

    return (
        <>
            {/* -------------Registration form start ------------------ */}
            <div className="card bg-base-100  lg:w-96  shadow-xl">

                <div className="card-body lg:items-center lg:text-center">
                    <h2 className="lg:text-3xl text-2xl font-bold text-gray-600 ">Join our Free Webinar</h2>
                    <p className=" [font-size:18px] lg:mr-10 lg:ml-10">Join our free webinar to learn how to get the best out of your online marketing efforts</p>
                    {/* -------------- Timer  Code start -------------- */}

                    <Timer />

                    {/* -------------- Timer  Code end -------------- */}

                    {/* -------------- Registration form  start  -------------- */}

                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                        {/* --------------- Name field ------------- */}
                        <label className="input input-bordered flex items-center gap-2">
                            <FaUserTie />
                            <input type="text" className="grow" placeholder="Your Name" />
                        </label>
                        {/* --------------- Phone number field ------------- */}
                        <label className="input input-bordered flex items-center gap-2">
                            <FaPhoneVolume />
                            <input type="text" className="grow" placeholder="Your Phone Number" />
                        </label>


                        {/* --------------- Email field ------------- */}
                        <label className="input input-bordered flex items-center gap-2">
                            <MdEmail />
                            <input type="email" className="grow" placeholder="Your Email" />
                        </label>

                        {/* ------------- Select field-------------------------- */}
                        <label className="input  input-bordered  flex items-center gap-4">
                            <GiGraduateCap />
                            <select className="select w-full  ">
                                <option disabled selected>Select Your Profession</option>
                                <option>Sales Professional</option>
                                <option>উদ্যোক্তা</option>
                                <option>Influencer</option>
                                <option>Others</option>
                            </select>
                        </label>
                        <label className="input  flex items-center gap-2">
                            <button className=" btn text-white btn-wide  bg-blue-800  ">Register</button>
                        </label>
                    </form>



                    {/* -------------- Registration form  end  -------------- */}
                    <div className="card-actions">


                        <p className='[font-size:16px] mt-4'>ওয়েবিনারটি কিছুক্ষনের মধ্যেই শুরু হতে যাচ্ছে, অংশগ্রহন করার জন্য এখনই ১০০% ফ্রি রেজিস্ট্রেশন সম্পন্ন করুন।</p>

                    </div>
                </div>
            </div >
            {/* -------------Registration form end ------------------ */}
        </>
    );
};

export default RegistrationForm;