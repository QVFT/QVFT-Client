import slugify from "slugify";
const timeline = require("../../../content/blog.json");

const contents = JSON.stringify(
  timeline.map(post => {
    return {
      title: post.attributes.title,
      slug: slugify(post.attributes.title).toLowerCase()
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
