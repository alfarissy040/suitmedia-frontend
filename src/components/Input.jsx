/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

const Input = ({ id, type, label, rule, errors }) => {
    const { register } = useFormContext();
    return (
        <div className="flex flex-col flex-1 gap-y-1 mt-3">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className={clsx("px-3 py-2 border flex-1 w-full", errors ? "border-red-500" : "border-zinc-600")} {...register(id, rule)} />
            {errors && <small className="text-sm text-red-600">{errors.message}</small>}
        </div>
    );
};

export default Input;
