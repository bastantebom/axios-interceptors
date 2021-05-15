function batchInterceptor(instance) {
  instance.interceptors.request.use(
    (request) => {
      request.params["ids"] = request.params.ids.join();
      return request;
    },
    (error) => Promise.reject(error)
  );
  instance.interceptors.response.use(
    (response) => {
      if (response.data.items.length) {
        return response.data.items;
      } else Promise.reject(response);
    },
    (error) => Promise.reject(error)
  );
}
export default batchInterceptor;
