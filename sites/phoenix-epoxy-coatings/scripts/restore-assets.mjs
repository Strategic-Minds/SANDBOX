import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "asset-src", "hero.b64");
const targetDir = path.join(root, "public", "v2-assets");
const target = path.join(targetDir, "hero.webp");

fs.mkdirSync(targetDir, { recursive: true });
const payload = fs.readFileSync(source, "utf8").trim();
const bytes = Buffer.from(payload, "base64");
if (bytes.length < 10000) {
  throw new Error("Hero asset restoration failed: decoded payload is unexpectedly small.");
}
fs.writeFileSync(target, bytes);
console.log(`Restored approved hero asset: ${bytes.length} bytes`);
