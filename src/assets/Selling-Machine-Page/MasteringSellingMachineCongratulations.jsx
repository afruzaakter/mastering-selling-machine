import { FaVideo } from "react-icons/fa6";

const MasteringSellingMachineCongratulations = () => {
  return (
    // --------------- code -----------------------

    <div className="lg:m-12 lg:ml-16 lg:mr-12 m-4 flex flex-col lg:justify-center lg:items-center  p-8">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-8 mt-8 font-serif text-center">
        Congratulations... you've been registered!
      </h1>
      <p className="text-lg lg:text-2xl mb-8 lg:text-center text-justify">
        অভিনন্দন জানাই আপনাকে সেশনটি থেকে সর্বোচ্চ সুবিধা নেওয়ার জন্য নিরিবিলি
        বসে মনোযোগ সহকারে দেখুন ও হাতের কাছে কাগজ-কলম রাখুন। আজকের এই সেশনটিতে
        জীবন পরিবর্তনকারী কিছু মেসেজ ও গাইডলাইন পাবেন, যা হাজারো মানুষের মতো
        আপনার ক্যারিয়ার বা জীবনেও কাজে লাগবে বলে বিশ্বাস করি। সেশন শুরু হতে যদি
        কিছুটা সময় বাকি থাকে তবে এই পেজের নিচের দিকে ভিজিট করে আমার বা আমার
        কার্য্যক্রম সম্পর্কে আরো কিছুটা বিস্তারিত জেনে নিতে পারেন। আশা করছি
        আজকের সেশন থেকে নতুন কিছু জানতে পারবেন যা কাজে লাগিয়ে আপনার ক্যারিয়ার,
        আপনার রেভিনিউ ও আপনার ব্যবসায়ীক সফলতাকে একধাপ এগিয়ে নিতে সক্ষম হবেন
        ইনশাআল্লাহ।
      </p>

      <div className="w-full flex justify-center">
        <iframe
          className="rounded-lg border-blue-700 border w-full max-w-full lg:w-[690px] h-[250px] lg:h-[388px]"
          src="https://www.youtube.com/embed/w5032_FSlW8"
          title="ওয়েবিনার এ রেজিঃ করার জন্য অভিনন্দন জানাই"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <button className="bg-blue-800 text-white text-lg lg:text-xl mt-8 py-2 px-4 rounded-lg hover:bg-blue-900 flex items-center gap-3">
        <FaVideo />
        Join The Webinar
      </button>

      <p className="text-sm lg:text-xl mt-10 mb-4 text-center">
        Copyright © 2018-2025 | MOFASSEL.COM | All Rights Reserved
      </p>
    </div>
  );
};

export default MasteringSellingMachineCongratulations;
