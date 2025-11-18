const HeroGradient = () => {
  return (
    <div className="pointer-events-none select-none">
      {/* Cyan superior derecha */}
      <div className="shadow-cyanMediumShadow absolute top-[-50px] right-[0px] -z-20 animate-pulse" />

      {/* Cyan suave lateral derecho */}
      <div className="shadow-cyanMediumShadow absolute top-[20%] right-[200px] -z-20 opacity-40" />

      {/* Orange superior derecha */}
      <div className="shadow-orangeMediumShadow absolute top-[10%] right-[-100px] -z-20 animate-pulse" />

      {/* Orange suave inferior */}
      <div className="shadow-orangeMediumShadow absolute bottom-[0] left-[40%] -z-20 opacity-40" />
    </div>
  );
};

export default HeroGradient;
