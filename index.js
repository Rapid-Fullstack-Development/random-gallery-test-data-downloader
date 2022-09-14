const axios = require("axios");
const fs = require("fs");

const UNSLASH_ACCESS_KEY = process.env.UNSLASH_ACCESS_KEY;
if (!UNSLASH_ACCESS_KEY) {
    throw new Error(`You need an Unsplash API account and key to run this code. Set your API key in the environment variable UNSLASH_ACCESS_KEY. See the readme for details.`);
}

const BASE_URL = "https://api.unsplash.com";
const NUM_PHOTOS = 30;
const RANDOM_PHOTO_URL = `${BASE_URL}/photos/random?client_id=${UNSLASH_ACCESS_KEY}&count=${NUM_PHOTOS}`;

async function main () {

    const { data } = await axios.get(RANDOM_PHOTO_URL);

    await fs.promises.writeFile("./gallery.json", JSON.stringify(data, null, 4));
}

main()
    .catch(err => {
        console.error("Error!");
        console.error(err);
    });

