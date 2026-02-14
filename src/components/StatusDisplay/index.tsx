// import timer hook
import { useTimerContext } from '../../hooks/useTimerContext';

// style import
import style from './style.module.css';
// import animation
import { motion, AnimatePresence } from 'framer-motion';

// Lucide import
import { BrainIcon, Clock4Icon, CoffeeIcon } from 'lucide-react';

export function StatusDisplay() {
  const { state } = useTimerContext();
  return (
    <AnimatePresence mode="wait">
      {state.tasks.length === 0 ? (
        <motion.div
          key="work"
          className={style.content}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Clock4Icon />
          <p>Chronos</p>
        </motion.div>
      ) : (
        <>
          {state.tasks[0].type === 'work' && (
            <motion.div
              key="work"
              className={style.content}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BrainIcon />
              <p>Focus</p>
            </motion.div>
          )}
          {state.tasks[0].type === 'shortBreak' && (
            <motion.div
              className={style.content}
              key="short-break"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <>
                <CoffeeIcon />
                <p>Short Break</p>
              </>
            </motion.div>
          )}
          {state.tasks[0].type === 'longBreak' && (
            <motion.div
              className={style.content}
              key="long-break"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <>
                <CoffeeIcon />
                <p>Long Break</p>
              </>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
