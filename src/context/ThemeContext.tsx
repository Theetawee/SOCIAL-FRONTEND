import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "",
    toggleTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Get the stored theme or default to dark mode if the user prefers it
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDarkMode ? "dark" : "light");

    


    useEffect(() => {
        document
          .querySelector("meta[name='theme-color']")
          ?.setAttribute(
            "content",
            initialTheme === "dark" ? "#121212" : "#ffffff"
          );

    },[initialTheme])

    
    // State for the current theme
    const [theme, setTheme] = useState<string>(initialTheme);

    // Apply theme changes to the document element and update localStorage
    useEffect(() => {
        const root = window.document.documentElement;

        // Remove the previous color theme class
        root.classList.remove(theme === "dark" ? "light" : "dark");
        if (theme === "dark") {
            root.style.colorScheme = "dark";

            document
                .querySelector("meta[name='theme-color']")
                ?.setAttribute("content", "#121212");
        } else {
            root.style.colorScheme = "light";
            document
                .querySelector("meta[name='theme-color']")
                ?.setAttribute("content", "#ffffff");
        }

        // Add the new color theme class
        root.classList.add(theme);

        // Update localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        // Toggle between light and dark themes
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    // Context data to be provided
    const contextData: ThemeContextProps = {
        theme: theme,
        toggleTheme: toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    );
};
