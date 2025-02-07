const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/fPoF7pY5erA?autoplay=1&mute=1&loop=1&playlist=fPoF7pY5erA&controls=0&showinfo=0&rel=0&start=5"
          title="Fashion Show Video"
          className="w-full h-full object-cover pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ 
            border: 'none',
            width: '100vw',
            height: '100vh',
          }}
        />
        
        {/* Overlay oscuro para mejorar el contraste */}
        <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />
      </div>
    </div>
  );
};

export default HeroSection; 