import { AlertCircle, Check } from "lucide-react";
import React, { useEffect } from "react";

interface ToastProps {
  message?: string;
  type?: string;
  show?: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  show,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-2 ${
        type === "success"
          ? "bg-green-600 text-white"
          : type === "error"
          ? "bg-red-600 text-white"
          : "bg-slate-600 text-white"
      }`}
    >
      {type === "success" && <Check size={16} />}
      {type === "error" && <AlertCircle size={16} />}
      <span>{message}</span>
    </div>
  );
};
