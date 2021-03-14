import axios from "axios";
let fetch = axios.create({
    baseURL: "",
    timeout: 5000 // request timeout
});
export default fetch;
//# sourceMappingURL=request.js.map