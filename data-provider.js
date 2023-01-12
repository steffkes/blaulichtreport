const Parser = require("rss-parser");
const Axios = require("axios");
const striptags = require("striptags");

const parser = new Parser({
  customFields: {
    item: ["media:content"],
  },
});

const fetch = async () => {
  const response = await Axios.get(
    "http://fetchrss.com/rss/63be8d9f9924331e3a3e8e2263be8d5e2bcfa23442456213.xml"
  );
  return response.data;
};

const mapper = (item) => {
  const chunks = striptags(item.content)
    .replace("(Feed generated with FetchRSS)", "")
    .split("\n\n");

  return {
    title: chunks[0].trim(),
    link: item.link,
    date: item.isoDate,
    content: chunks[1].trim(),
    image: item["media:content"]["$"]["url"],
  };
};

module.exports = async (data = fetch()) => {
  const feed = await parser.parseString(await data);
  return feed.items.map(mapper);
};
