const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/about-me.png"
          alt="About Me Image"
          className="h-full w-auto object-cover bourderder-2 border-white rounded-[80px] shadow-lg hover:border-cyan-500 transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
