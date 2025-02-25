import { motion } from "framer-motion";

const ScrollingLogo = ({ src, delay = 0, duration = 5 }) => {
  return (
    <motion.img
      src={src}
      alt="logo"
      className="h-16 w-auto"
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        delay,
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

const InfiniteLogoScroll = () => {
  // Inserisci qui i percorsi dei tuoi loghi
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
  ];
  
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-6">
      <div className="flex items-center space-x-8">
        {logos.map((logo, i) => (
          <ScrollingLogo key={i} src={logo} delay={i * 0.5} duration={8} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;
