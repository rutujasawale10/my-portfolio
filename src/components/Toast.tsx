import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  isOpen,
  onClose,
  duration = 4000
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-cyan-500" />
  };

  const bgStyles = {
    success: 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200',
    error: 'bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800/60 text-rose-900 dark:text-rose-200',
    info: 'bg-cyan-50 dark:bg-cyan-950/80 border-cyan-200 dark:border-cyan-800/60 text-cyan-900 dark:text-cyan-200'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center max-w-md w-full sm:w-auto"
        >
          <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border shadow-xl backdrop-blur-md ${bgStyles[type]} w-full`}>
            <div className="flex-shrink-0">{icons[type]}</div>
            <p className="text-sm font-medium pr-2">{message}</p>
            <button
              onClick={onClose}
              className="ml-auto p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4 opacity-70 hover:opacity-100" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
