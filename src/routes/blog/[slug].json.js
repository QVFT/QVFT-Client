import slugify from "slugify";
import dateformat from "dateformat";

const timeline = require("../../../content/blog.json");

const posts = timeline.map(post => {
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
});

const lookup = new Map();
posts
  .filter(post => post.content)
  .forEach(post => {
    lookup.set(post.slug.toLowerCase(), JSON.stringify(post));
  });

export function get(req, res) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const slug = req.params.slug.toLowerCase();

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: "Not found"
      })
    );
  }
}
