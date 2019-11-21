import slugify from "slugify";
import dateformat from "dateformat";

function getData() {
  const teamFile = require("../../../content/team.json");

  const team = teamFile.map(member => {
    return {
      name: member.name,
      position: member.position,
      yearMajor: member.yearMajor,
      image: member.image
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

  return { team, blog };
}

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const { team, blog } = getData();
  res.end(JSON.stringify({ team, blog }));
}
