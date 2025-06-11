import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  (
    { type, placeholder, label, className, labelClass, register, name, error },
    ref
  ) => {
    return (
      <div className='w-full flex flex-col gap-1'>
        {label && (
          <label
            htmlFor={name}
            className={clsx("text-gray-700 font-medium", labelClass)}
          >
            {label}
          </label>
        )}

        <div>
          <input
            type={type || "text"}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={clsx(
              "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-500 text-black outline-none text-base focus:ring-2 ring-blue-300 focus:border-pink-500",
              className
            )}
            {...register}
            aria-invalid={error ? "true" : "false"}
          />
        </div>

        {error && (
          <span className='text-xs text-[#f64949fe] mt-0.5'>{error}</span>
        )}
      </div>
    );
  }
);

export default Textbox;