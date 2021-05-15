import React, { useEffect } from "react";
import apiClient from "./services/apiClient.js";

function App() {
  const runTest = async () => {
    const batchUrl = "/file-batch-api";

    const req1 = apiClient.get(batchUrl, {
      params: { ids: ["fileid1", "fileid2"] },
    });
    const req2 = apiClient.get(batchUrl, {
      params: { ids: ["fileid2"] },
    });
    const req3 = apiClient.get(batchUrl, {
      params: { ids: ["fileid3"] },
    });
    const resp = await Promise.all([req1, req2, req3]);
    console.log(resp);
  };

  useEffect(() => {
    runTest();
  }, []);

  return (
    <div className="App">
      <h1>Axios Interceptors - Jayson Ilagan</h1>
    </div>
  );
}

export default App;
