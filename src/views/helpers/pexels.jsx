import { createClient } from "pexels";

const API_KEY = '563492ad6f917000010000010f9e4c416ff8451296f5943ac35bbbcc';
const client = createClient(API_KEY);

export const getImages = async () => {
    var result = {};
    await client.photos.curated({ per_page: 10, page: 1 }).then(photos => {
        result = photos;
    });
    console.log(result)
    return result;
}