import slugify from "slugify";
import dateformat from "dateformat";

const blog = require("../../../content/blog.json");

const contents = JSON.stringify(
  blog
    .map(post => {
      return {
        title: post.attributes.title,
        slug: slugify(post.attributes.title).toLowerCase(),
        content: post.body,
        date: dateformat(post.attributes.date, "mmmm dd, yyyy"),
        image: post.attributes.image,
        imageAlt: post.attributes.imageAlt,
        blurb: post.attributes.blurb,
        author: post.attributes.author
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
