import slugify from "slugify";
import dateformat from "dateformat";

const teamFile = require("../../../content/team.json");

const team = teamFile.map(member => {
  return {
    name: member.attributes.name,
    position: member.attributes.position,
    yearMajor: member.attributes.yearMajor,
    image: member.attributes.image,
    content: member.body
  };
});

const blogFile = require("../../../content/blog.json");

const blog = blogFile
  .map(post => ({
    title: post.attributes.title,
    slug: slugify(post.attributes.title).toLowerCase(),
    content: post.body,
    date: dateformat(post.attributes.date, "mmmm dd, yyyy"),
    blurb: post.attributes.blurb,
    author: post.attributes.author
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 5);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify({ team, blog }));
}
