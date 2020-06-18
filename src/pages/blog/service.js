export default {
  fetchBlog: async (id) => {
    const response = await window.rest.get(`/blog/${id}`);
    return response.data;
  },
  fetchList: async () => {
    const response = await window.rest.get("/list");
    return response.data;
  },
};
