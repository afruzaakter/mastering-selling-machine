import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

const SellingMachineWelcome = () => {
  const navigate = useNavigate();

  const handleJoinWebinar = () => {
    navigate("/live");
  };

  return (
    <div className="lg:m-12 lg:ml-16 lg:mr-12 m-4   lg:flex lg:justify-center lg:items-center">
      <div>
        <h2 className="lg:text-4xl text-2xl text-red-500 lg:ml-28 lg:mr-20 mb-10  text-center  font-bold  ">
          যেকোন ব্যবসার সেলস্‌ জ্যামিতিক হারে বাড়ানোর একমাত্র উপায় জানুন ও নিজের
          ব্যবসার সেলস্‌ বিষয়ক দুশ্চিন্তা মুক্ত হোন ।
        </h2>
        <div className="lg:flex justify-center   mb-14 lg:items-center  lg:gap-20  ">
          <div className="flex items-center">
            <iframe
              className="border-2 border-spacing-3 rounded-md border-red-500 "
              width={550}
              height={360}
              src="https://www.youtube.com/embed/BImFWxvAjDc"
              title="ফ্রি ওয়েবিনার এ অংশগ্রহন করতে রেজিঃ করুন এখনই"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <RegistrationForm />
          </div>

          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Webinar</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={handleJoinWebinar}
            >
              Join Webinar
            </button>
          </div>
        </div>
        <p className="lg:text-3xl md:text-3xl text-2xl text-red-500 text-center p-14 lg:pr-16 lg:pl-16">
          আমি মোঃ মোফাচ্ছেল হোসেন, আপনাকে জানাই স্বাগতম। আপনি যদি সেলস্‌
          প্রফেশনাল, উদ্যোক্তা বা ইন্সফ্লূয়েন্সার হয়ে থাকেন তবে আজকের এই সেশনটি
          আপনার জন্যই। সেশনটিতে অংশগ্রহন করার জন্য আপনার নাম, মোবাইল, ইমেইল ও
          প্রফেশন উল্লেখ করে ১০০% ফ্রি রেজিস্ট্রেশন সম্পন্ন করুন। ধন্যবাদ ।
        </p>
        <p className="text-xl mt-12 text-center">
          Copyright © 2018-2025 | MOFASSEL.COM | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default SellingMachineWelcome;
