import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const sourcePath = path.join(projectRoot, "lib", "site-content.ts");
const outputRoot = path.join(projectRoot, "public", "legacy", "uploads");

const source = await readFile(sourcePath, "utf8");

const assets = new Map();

function add(relativePath) {
  if (!relativePath) {
    return;
  }

  const normalized = relativePath.replace(/^\/+/, "");
  const url = `https://bsltrading.sk/wp-content/uploads/${normalized}`;

  assets.set(url, path.join(outputRoot, normalized));
}

for (const match of source.matchAll(/referenceImage\("([^"]+)"\)/g)) {
  add(`2020/07/${match[1]}`);
}

for (const match of source.matchAll(/reconstructionImage\("([^"]+)"\)/g)) {
  add(`2020/07/${match[1]}`);
}

for (const match of source.matchAll(/apartmentImage\("([^"]+)"(?:,\s*"([^"]+)")?\)/g)) {
  const filename = match[1];
  const month = match[2] ?? "08";
  add(`2023/${month}/${filename}`);
}

if (source.includes("Array.from({ length: 15 }, (_, index) => ({") && source.includes("Exterier_${index + 1}.png")) {
  for (let index = 1; index <= 15; index += 1) {
    add(`2023/08/Exterier_${index}.png`);
  }
}

for (const match of source.matchAll(/certificatePdf\("([^"]+)",\s*"([^"]+)"\)/g)) {
  add(`${match[2]}/${match[1]}`);
}

for (const match of source.matchAll(/certificateImage\("([^"]+)",\s*"([^"]+)"\)/g)) {
  add(`${match[2]}/${match[1]}`);
}

for (const match of source.matchAll(/https:\/\/bsltrading\.sk\/wp-content\/uploads\/([^"\s]+)/g)) {
  add(match[1]);
}

const failures = [];

for (const [url, destination] of assets.entries()) {
  try {
    await access(destination);
    console.log(`skip ${path.relative(projectRoot, destination)}`);
    continue;
  } catch {
    // File is not present yet, continue with download.
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      failures.push(`${response.status} ${url}`);
      continue;
    }

    const bytes = Buffer.from(await response.arrayBuffer());

    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, bytes);

    console.log(`saved ${path.relative(projectRoot, destination)}`);
  } catch (error) {
    failures.push(`${url} :: ${error instanceof Error ? error.message : String(error)}`);
  }
}

console.log(`downloaded ${assets.size - failures.length}/${assets.size} assets`);

if (failures.length) {
  console.error("failed assets:");

  for (const failure of failures) {
    console.error(failure);
  }

  process.exitCode = 1;
}
