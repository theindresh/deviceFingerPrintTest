import { getDeviceFingerprint } from "devicedna";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners"; // Import the desired loader

function App() {
  const [fingerprint, setFingerprint] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFingerprint = async () => {
      const result = await getDeviceFingerprint();
      console.log(result, "Fingerprint data");
      

      // Simulate a delay (e.g., 2 seconds)
      setTimeout(() => {
        setFingerprint(result);
        setLoading(false);
      }, 2000);
    };
    getFingerprint();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Device Fingerprint</h1>

        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* RingLoader from react-spinners */}
            <RingLoader
              color="#36d7b7"
              size={50} // Adjust size as needed
              speedMultiplier={0.8} // Adjust speed for a smoother animation
            />
            <p className="text-black text-lg">Fetching Device ID...</p>
            <div className="text-black text-sm mt-4">
              <p>
                We are currently retrieving unique information from your device
                to ensure the best experience.
              </p>
              <p className="mt-2">
                This helps personalize your settings and enhance security.
              </p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-gray-700 text-lg mb-3">Your Device ID is:</p>
            <div className="bg-gray-100 p-6 rounded-xl text-gray-800 text-sm font-mono break-all shadow-inner">
              {fingerprint?.data?.BrowserId || "Unavailable"}
              <br />
              {fingerprint?.data?.deviceId || "Unavailable"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
