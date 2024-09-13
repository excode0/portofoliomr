import { motion } from "framer-motion";
const ParallaxeSlideEffect = ({onComplete}) => {
    return (
      <motion.div
        animate={{
          width: ["100%"],
          height: ["0%", "100vh"],
          rotate: [0],
          borderRadius: ["0%"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0],
        //   repeat: Infinity,
        }}
        className="bg-background rounded-full w-[100px] h-[100px] z-10"
        onAnimationComplete={onComplete}
      />
    );
  };
  export default ParallaxeSlideEffect