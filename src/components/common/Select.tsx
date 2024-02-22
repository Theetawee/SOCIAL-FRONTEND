const Select = ({
    label,
    name,
    disabled,
    required,
    defaultValue,
    options,
    className="px-4 py-2.5"
}: {
    label: string;
        name: string;
    defaultValue: string;
    required: boolean;
        options: { label: string; value: string }[];
        className?: string
    disabled: boolean
    }) => {



    return (
        <select
            id={name}
            name={name}
            defaultValue={defaultValue}
            disabled={disabled}
            className={`block w-full ${className}  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1 dark:bg-gray-900 dark:border-gray-700 dark:text-white`}
            required={required}
        >
            <option value="" disabled>{label}</option>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    className="text-gray-900 dark:text-gray-200"
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
