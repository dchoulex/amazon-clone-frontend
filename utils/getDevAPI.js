export default function getDevAPI(api, id = null, id2 = null, query = null) {
    let API_URI = api.replace("<URL>", process.env.NEXT_PUBLIC_DEV_URL);

    if (id) {
        API_URI = API_URI.replace("<ID>", id)
    };

    if (id2) {
        API_URI = API_URI.replace("<ID2>", id2)
    };

    if (query) {
        API_URI = API_URI.replace("<QUERY>", query)
    }

    return API_URI;
};