const { execSync } = require("child_process");

try {
  execSync("npx tailwindcss -i src/input.css -o dist/output.css", {
    stdio: "inherit",
    shell: true,
  });
} catch (err) {
  console.error("Tailwind build failed", err);
  process.exit(1);
}
