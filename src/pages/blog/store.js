import service from "./service";

export default class StoreFile {
  constructor(detail, list) {
    this.detail = detail[0];
    this.setDetail = detail[1];
    this.list = list[0];
    this.setList = list[1];
  }

  fetchBlog = async (id) => {
    try {
      const response = await service.fetchBlog(id);
      const data = {
        ...response,
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

  fetchList = async () => {
    try {
      const response = await service.fetchList();
      const data = {
        ...response,
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
