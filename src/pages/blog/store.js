export default class StoreFile {
  constructor(detail, list) {
    this.detail = detail[0];
    this.setDetail = detail[1];
    this.list = list[0];
    this.setList = list[1];
  }

  fetch = async (slug) => {
    try {
      const response = await window.rest.get(`/blog/${slug}`);
      const data = {
        ...response,
        ok: true,
      };
      this.setDetail(data);
      return data;
    } catch (error) {
      const data = {
        ...error,
        ok: false,
      };
      return data;
    }
  };

  fetchAll = async () => {
    try {
      const response = await window.rest.get("/list");
      const data = {
        ...response,
        ok: true,
      };
      this.setList(data);
      return data;
    } catch (error) {
      const data = {
        ...error,
        ok: false,
      };
      return data;
    }
  };
}
