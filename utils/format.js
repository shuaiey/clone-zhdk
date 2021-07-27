const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const formateDate = (date) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const year = date.getFullYear(); // 2019
  const day = date.getDate();
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];

  return `${dayName}, ${day} ${monthName} ${year}`;
};


export const slugify = (str = "") => {
  let slug = str
    .toLowerCase()
    .replace(/\s/g, "-") // space
    .replace(/[^a-zA-Z0-9-]/g, ""); // special chars

  // If the value starts with a number, swap it out!
  // Doing this in a dumb way for now.
  if (slug.match(/^[\d]{1,2}-/)) {
    slug = slug.replace(/^[\d]{1,2}-/, "digit");
  }

  return slug;
};
