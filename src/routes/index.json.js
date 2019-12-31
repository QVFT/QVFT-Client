import dateformat from "dateformat";

function getData() {
  const teamFile = require("../../../content/team.json");

  const team = teamFile
    .filter(member => !member.hidden)
    .map(member => {
      return {
        name: member.name,
        position: member.position,
        yearMajor: member.yearMajor,
        image: member.image,
        gitHub: member.gitHub,
        linkedIn: member.linkedIn,
        email: member.email,
        blurb: member.blurb
      };
    });

  const timelineFile = require("../../../content/timeline.json");

  const timeline = timelineFile
    .map(item => ({ ...item, date: `${item.date}-02` }))
    .map(item => ({
      prettyDate: dateformat(item.date, "mmmm yyyy"),
      ...item
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log(timeline);
  return { team, timeline };
}

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const { team, timeline } = getData();
  res.end(JSON.stringify({ team, timeline }));
}
