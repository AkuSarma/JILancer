import  { useState, useEffect } from 'react';

const TimeDateCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#C9DABF] text-[#5F6F65] p-5 rounded-lg text-center shadow-md">
      <h2 className="text-xl font-bold mb-2">Current Time & Date</h2>
      <p className="text-lg">{time.toLocaleTimeString()}</p>
      <p className="text-lg">{time.toLocaleDateString()}</p>
    </div>
  );
};

export default TimeDateCard;
