const { spawn } = require("child_process");

const cmd = process.platform === "win32" ? "npx.cmd" : "npx";
const args = ["tailwindcss", "-i", "src/input.css", "-o", "dist/output.css"];

const child = spawn(cmd, args, { stdio: "inherit" });

child.on("close", (code) => {
  if (code !== 0) {
    console.error(`Tailwind build failed with exit code ${code}`);
    process.exit(code);
  } else {
    console.log("Tailwind build succeeded!");
  }
});
