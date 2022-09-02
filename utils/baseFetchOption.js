import { HttpsProxyAgent } from "https-proxy-agent";

const baseFetchOptions = {
    agent: new HttpsProxyAgent({
        host: "http://localhost",
        port: 3000
    })
};

export default baseFetchOptions;