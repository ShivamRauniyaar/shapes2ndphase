const stats = [
  {
    number: "1000+",
    text: (
      <span>
        luxury hospitiality
        <br /> brand's trust{" "}
      </span>
    ),
  },
  {
    number: "25+",
    text: (
      <span>
        countries <br /> spanning
      </span>
    ),
  },
  {
    number: "100+",
    text: (
      <span>
        cities in india <br /> spanning
      </span>
    ),
  },
];
const StatsCircles = ({ statsData = stats }) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex -space-x-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="w-[170px] h-[170px] rounded-full border border-[#b9975b] bg-transparent flex flex-col justify-center items-center z-10"
          >
            <h2 className="stats_heading">{stat.number}</h2>
            <p className="text-center">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCircles;
