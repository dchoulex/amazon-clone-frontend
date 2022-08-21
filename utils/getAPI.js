export default function getAPI(api, id = null, id2 = null) {
    console.log()
    let API_URI = api.replace("<URL>", process.env.DEV_URL);

    if (id) {
        API_URI = API_URI.replace("<ID>", id)
    };

    if (id2) {
        API_URI = API_URI.replace("<ID2>", id2)
    };

    return API_URI;
};