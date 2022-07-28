import http from "../http-common";
class TaskDataService {
  getAll() {
    return http.get("/task");
  }
  get(id) {
    return http.get(`/task/${id}`);
  }
  create(companyID) {
    return http.post("https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id="+companyID);
  }
  update(id, data) {
    return http.put(`/task/${id}`, data);
  }
  delete(id) {
    return http.delete(`/task/${id}`);
  }
}
export default new TaskDataService();