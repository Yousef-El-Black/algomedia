import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const MsgsContainer = () => {
  const msgs = useSelector(
    (state: { msgs: { value: string[] } }) => state.msgs.value,
  );

  return (
    <ul className="msgs-container fixed top-20 right-10 p-4 rounded-t-lg z-50 w-50 flex-col-reverse text-center">
      {msgs.map((msg: string, index: number) => (
        <motion.li
          key={index}
          className="text-sm text-red-500 bg-white rounded-lg p-4 mt-4 shadow-lg shadow-shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            scale: [0.9, 1, 1, 1, 0.9],
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          transition={{
            // Entrance & Keyframe timing (2 seconds total: 1s in + 1s hold)
            duration: 2,
            times: [0, 0.5], // 0-1s for fade-in, 1-2s for hold
          }}
        >
          {msg}
        </motion.li>
      ))}
    </ul>
  );
};

export default MsgsContainer;
