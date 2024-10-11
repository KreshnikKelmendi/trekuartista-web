import React, { useState, useEffect } from "react";
import YsabelTest from "./YsabelTest";
import trekuartistaLogo from '../Components/Assets/logo-treku.png';
import hide from "../Components/Assets/hide.png";

const ErrorModal = ({ message, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 text-center py-10 shadow-lg">
            <img src={trekuartistaLogo} alt="Trekuartista Logo" className="w-12 h-auto mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#DF319A] mb-2 font-custom">Ooops! Wrong Password!</h2>
            <p className="mb-4 font-custom1 text-sm text-gray-700">{message}</p>
            <button
                onClick={onClose}
                className="bg-black w-full text-white p-2 hover:bg-white hover:text-black transition duration-200"
            >
                Try Again
            </button>
        </div>
    </div>
);

function YsabelPage() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
    const correctPassword = "trekuartista1"; // The correct password

    // Check localStorage for authentication state
    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated");
        if (authStatus === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        setTimeout(() => {
            if (password === correctPassword) {
                setIsAuthenticated(true);
                localStorage.setItem("isAuthenticated", "true");
            } else {
                setIsErrorModalOpen(true);
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleCloseModal = () => {
        setIsErrorModalOpen(false);
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Logout function to clear localStorage
    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated"); // Clear authentication state
        setShowDropdown(false); // Close the dropdown
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // Scroll to top-left
    };

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <div className="relative">
            <div className="text-center justify-center items-center grid font-custom1">
                {!isAuthenticated ? (
                    <form
                        className="h-screen flex flex-col justify-center items-center"
                        onSubmit={handleSubmit}
                    >
                        <img
                            src={trekuartistaLogo}
                            alt="Trekuartista Logo"
                            className="mb-6 w-12 h-auto"
                        />
                        <p className="text-xl mb-4 font-custom">Enter Password</p>
                        <div className="relative w-full mb-4 flex justify-center items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="* * * * * * * *"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 border border-gray-300 w-full"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-2 text-gray-500"
                            >
                                {showPassword ? (
                                    <span role="img" aria-label="Hide Password">👁️</span>
                                ) : (
                                    <span role="img" aria-label="Show Password"><img className="w-5 object-cover" alt="" src={hide} /></span>
                                )}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="p-2 bg-black w-full text-white hover:bg-white hover:text-black font-custom1 flex items-center justify-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                                    <span>Authenticating...</span>
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="h-full">
                        <YsabelTest />

                        {/* User Icon and Dropdown */}
                        <div className="absolute top-12 right-4 lg:right-[55px] z-50">
                            <div className="relative">
                                {/* Logo with Down Arrow */}
                                <div
                                    className="flex items-center gap-1 cursor-pointer"
                                    onClick={toggleDropdown}
                                >
                                    <img
                                        src={trekuartistaLogo}
                                        alt="Trekuartista Logo"
                                        className="rounded-full border-2 border-[#DF319A] p-[3px] w-8 h-8 object-contain"
                                    />
                                    <i
                                        className={`absolute text-[14px] top-[22px] border border-gray-400 bg-gray-200 rounded-full right-1 fas fa-chevron-down text-red-900 transition-transform duration-300 ${showDropdown ? "rotate-180" : ""
                                            }`}
                                    ></i>
                                </div>

                                {/* Dropdown Menu */}
                                {showDropdown && (
                                    <div className="absolute w-[130px] text-[14px] right-0 mt-3 bg-white hover:bg-gray-100 shadow-lg rounded-lg p-3 transition-all duration-200 ease-in-out">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-black flex gap-x-2 justify-center items-center font-custom1 font-semibold hover:text-red-700"
                                        >
                                            <i className="fas fa-sign-out-alt text-[16px]"></i>
                                            Log Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                )}
                {isErrorModalOpen && (
                    <ErrorModal
                        message="Unfortunately, the password you entered is incorrect. Please double-check your entry and try again to access the Trekuartista profile."
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
}

export default YsabelPage;
