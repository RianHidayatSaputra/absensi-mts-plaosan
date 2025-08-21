export default function Checkbox({ className = "", children, ...props }) {
    return (
        <label className="inline-flex items-center gap-2">
            <input
                {...props}
                type="checkbox"
                className={
                    "rounded border-dark text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                    className
                }
            />
            {children}
        </label>
    );
}
