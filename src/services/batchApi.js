import apiClient from "./apiClient";

const getFile = async () => {
  return await apiClient({
    url: `/file-batch-api`,
    method: "GET",
  });
};

const Api = {
  getFile,
};

export default Api;
