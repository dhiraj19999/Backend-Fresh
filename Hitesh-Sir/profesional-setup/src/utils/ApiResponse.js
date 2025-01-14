class ApiResponse {
  constructor(statuscode, message="Success", data) {
    this.statuscode = statuscode;
    this.message = message;
    this.data = data;
    this.success = statuscode >= 200 && statuscode < 400;
  }
}


export default ApiResponse;