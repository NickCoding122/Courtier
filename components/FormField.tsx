"use client";

import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

type BaseFieldProps = {
  label: string;
  helper?: ReactNode;
  className?: string;
  success?: boolean;
};

type InputFieldProps = BaseFieldProps & {
  type?: "input";
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

type SelectFieldProps = BaseFieldProps & {
  type: "select";
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  options: { label: string; value: string }[];
};

type TextareaFieldProps = BaseFieldProps & {
  type: "textarea";
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
};

type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

export function FormField(props: FormFieldProps) {
  const { label, helper, className } = props;
  const inputStyles =
    "mt-2 w-full rounded-sm border border-white/20 bg-black/40 px-3 py-2 text-white placeholder-white/40 transition focus:border-[#C9B37E] focus:ring-2 focus:ring-[#C9B37E]/40 focus:outline-none";

  return (
    <div className={cn("text-sm text-white", className)}>
      <label className="block text-xs uppercase tracking-[0.3em] text-white/60">{label}</label>
      {props.type === "select" ? (
        <select {...props.selectProps} className={inputStyles}>
          {props.options.map((option) => (
            <option key={option.value} value={option.value} className="bg-black text-white">
              {option.label}
            </option>
          ))}
        </select>
      ) : props.type === "textarea" ? (
        <textarea {...props.textareaProps} className={cn(inputStyles, "min-h-[140px]")} />
      ) : (
        <input {...props.inputProps} className={inputStyles} />
      )}
      <AnimatePresence>
        {helper && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 0.8, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-xs text-white/60"
          >
            {helper}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
