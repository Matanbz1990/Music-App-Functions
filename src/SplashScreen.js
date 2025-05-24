import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./SplashScreen.module.css";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // זמן הספלש 3 שניות
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={classes.splashScreen}>
      <div className={classes.splashContent}>
        <motion.div
          className={classes.splashContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.img
            src="Logo.png"
            alt="Logo"
            className={classes.Logo}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.h1
            className={classes.Welcome}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Welcome to Matan Ben Zahav Music Website
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
