import { createClient } from "pexels";

const API_KEY = '563492ad6f917000010000010f9e4c416ff8451296f5943ac35bbbcc';
const client = createClient(API_KEY);

export const getImages = async (numPage) => {
    var result = {};
    await client.photos.curated({ per_page: 30, page: numPage }).then(photos => {
        result = photos;
    });
    return result;
}

export const getVideos = async (numPage) => {
    var result = {};
    await client.videos.popular({ per_page: 30, page: numPage }).then(media => {
        result = media.videos;
    });
    return result;
}