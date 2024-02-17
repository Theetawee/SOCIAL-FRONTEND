import { DarkModeSwitch } from "react-toggle-dark-mode";
import useTheme from "../../hooks/useTheme";

export default function Switch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <DarkModeSwitch
                className="w-5 h-5 m-auto"
                checked={theme === "light"}
                onChange={toggleTheme}
                sunColor="#fbbf24"
                moonColor="#666666"
            />
        </>
    );
}
