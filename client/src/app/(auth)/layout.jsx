"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}





// initial={{ x: "100%" }}
// animate={{ x: 0 }}
// exit={{ x: "-100%" }}
// transition={{ duration: 0.5, ease: "easeInOut" }}