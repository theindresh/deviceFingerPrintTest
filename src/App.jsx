import { getDeviceFingerprint } from "devicedna";
import { useEffect, useState } from "react";

function App() {
  const [fingerprint, setFingerprint] = useState({});
  useEffect(() => {
    const getFingerprint = async () => {
      const fingerprint = await getDeviceFingerprint();
      console.log(fingerprint);
      setFingerprint(fingerprint);
    };
    getFingerprint();
  }, []);
  return (
    <>
      <div className="App">
        <h1>{fingerprint.deviceId}</h1>
        <p>Check the console for the fingerprint data.</p>
      </div>
    </>
  );
}

export default App;
