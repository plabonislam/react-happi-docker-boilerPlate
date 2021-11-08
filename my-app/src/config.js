
let baseurl = " ";

if (process.env.REACT_APP_PROD == "production")
    baseurl = "http://localhost:3001";

export default baseurl;