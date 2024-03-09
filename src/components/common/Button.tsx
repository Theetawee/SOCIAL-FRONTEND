interface Props {
  type?: "button" | "submit";
  className?: string;
  label: string;
    disabled: boolean;
    onClick?: () => void;
}

const Loader = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <span>
        <svg
          width="24"
          height="24"
          className="text-primary-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`.spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}`}</style>
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            className="spinner_z9k8"
          />
        </svg>
      </span>
    </div>
  );
};

const Button = ({
  type = "button",
  label,
    disabled,
  onClick,
  className = "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",
}: Props) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={className}>
      {disabled ? <Loader /> : label}
    </button>
  );
};

export default Button;
