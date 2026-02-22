const obj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  py: "python",
};

for (const key in obj) {
  console.log(`${key}  shortcut is for ${obj[key]}`);
}

const programming = ["js", "rb", "py", "java"];

for (const key in programming) {
  console.log(key);
  console.log(programming[key]);
}