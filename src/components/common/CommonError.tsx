import { useNavigate } from "react-router-dom";
import Button from "./Button";

const CommonError = (): JSX.Element => {
    const navigate = useNavigate();

    return (
      <section className="h-screen z-[1000] flex items-center px-6">
        <div>
          <span className=" mt-3">
            <h2 className="text-3xl text-gray-800 dark:text-white">
              Oops, something went wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              But dont worry - Its not your fault.
            </p>
            <div className="mt-3">
                        <Button
                            disabled={false}
                            label="Retry"
                onClick={() => navigate(0)}
                className="bg-white rounded-full font-bold dark:text-gray-900 px-10 py-2 border border-gray-100 dark:border-gray-800"
              />
              
            </div>
          </span>
        </div>
      </section>
    );
};

export default CommonError;
