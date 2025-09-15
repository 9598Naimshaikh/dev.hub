import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="relative max-w-[1100px] mx-auto bg-white text-zinc-800 dark:text-zinc-100 dark:bg-zinc-900 rounded-full shadow-md dark:shadow-zinc-400/40 flex items-center justify-between px-6 py-4 border-2 border-zinc-100 dark:border-zinc-400/20">
            <Link to="/" className="text-2xl font-extrabold">DEV.Hub</Link>
            <nav className="flex items-center justify-center gap-4">
                <ul className="hidden sm:flex flex-col sm:flex-row gap-4">
                    <li className="hover:scale-110 hover:bg-blue-500 hover:px-4 py-1 transition-all duration-300 hover:rounded-full"><Link to="/" className="hover:underline">Home</Link></li>
                    <li className="hover:scale-110 hover:bg-blue-500 hover:px-4 py-1 transition-all duration-300 hover:rounded-full"><Link to="/about" className="hover:underline">About</Link></li>
                    <li className="hover:scale-110 hover:bg-blue-500 hover:px-4 py-1 transition-all duration-300 hover:rounded-full"><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="p-2 hover:scale-125 transition-all cursor-pointer rounded-full hover:bg-blue-500 bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-white"
                >
                    {theme === "light" ? (
                        <MoonIcon className="h-5 w-5" />
                    ) : (
                        <SunIcon className="h-5 w-5" />
                    )}
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
