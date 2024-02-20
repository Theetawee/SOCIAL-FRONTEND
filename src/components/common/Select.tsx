const Select = ({
    label,
    name,
    required,
    defaultValue,
    options,
}: {
    label: string;
        name: string;
    defaultValue: string;
    required: boolean;
    options: { label: string; value: string }[];
    }) => {



    return (
        <select
            id={name}
            name={name}
            defaultValue={defaultValue}
            className="block w-full px-4 py-2.5  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:ring-1 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
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
