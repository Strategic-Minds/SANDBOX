import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const receiptsDir = 'receipts';
const requiredPhrases = [
  '## Objective',
  '## Safety Gates',
  '## Validation Checklist',
  'No Supabase write performed',
  'No Vercel deployment triggered',
  'No Shopify mutation performed',
];

function collectMarkdownFiles(dir) {
  if (!existsSync(dir)) return [];

  return readdirSync(dir)
    .map((entry) => join(dir, entry))
    .filter((path) => statSync(path).isFile() && path.endsWith('.md'));
}

const receiptFiles = collectMarkdownFiles(receiptsDir);

if (receiptFiles.length === 0) {
  console.error('No receipt markdown files found in receipts/.');
  process.exit(1);
}

const failures = [];

for (const file of receiptFiles) {
  const content = readFileSync(file, 'utf8');
  for (const phrase of requiredPhrases) {
    if (!content.includes(phrase)) {
      failures.push(`${file} is missing required phrase: ${phrase}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Receipt validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Receipt validation passed for ${receiptFiles.length} file(s).`);
