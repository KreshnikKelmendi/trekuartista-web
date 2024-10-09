import React, { useState } from "react";
import YsabelTest from "./YsabelTest";

function YsabelPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const correctPassword = "trekuartista1"; // The correct password

  // Function to handle password submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader

    // Scroll to the top-left of the window
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Simulate authentication delay
    setTimeout(() => {
      if (password === correctPassword) {
        setIsAuthenticated(true); // Grant access if password is correct
      } else {
        alert("Incorrect password!"); // Show error for incorrect password
      }
      setIsLoading(false); // Hide loader
    }, 1000);
  };

  // Inline style for the loader
  const loaderStyle = {
    border: "4px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    borderTop: "4px solid #fff",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    backgroundColor: "pink",
  };

  // Keyframes for spin animation
  const spinAnimationStyle = {
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  };

  return (
    <div className="relative">
      <div className="text-center justify-center items-center grid font-custom1">
        {isLoading ? (
          <div className="mt-60 mb-60" style={loaderStyle}></div> // Show loader while loading
        ) : !isAuthenticated ? (
          <form
            className="h-screen flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <p className="text-xl mb-4 font-custom">Enter Password</p>
            <input
              type="text"
              placeholder="* * * * * * * *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 mb-4 w-full"
            />
            <br />
            <button
              type="submit"
              className="p-2 bg-black w-full text-white hover:bg-white hover:text-black font-custom1"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="h-full">
            <YsabelTest />
          </div>
        )}
      </div>
    </div>
  );
}

export default YsabelPage;
