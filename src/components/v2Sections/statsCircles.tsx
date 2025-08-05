// components/StatsCircles.tsx

const StatsCircles = () => {
  const stats = [
    {
      number: "1000+",
      text: ["luxury hospitality", "brand’s trust"],
    },
    {
      number: "25+",
      text: ["countries", "spanning"],
    },
    {
      number: "100+",
      text: ["cities in India", "spanning"],
    },
  ];

  return (
    <div className="flex justify-center items-center ">
      <div className="flex -space-x-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-[14rem] h-[14rem] rounded-full border border-[#b9975b] bg-transparent flex flex-col justify-center items-center z-10"
          >
            <h2 className="text-2xl font-semibold text-black">{stat.number}</h2>
            <p className="text-center text-sm text-gray-700 leading-tight">
              {stat.text.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCircles;
