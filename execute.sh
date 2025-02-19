#!/bin/bash

rm -rf .git

git init
git add .
git commit -m "Initial Commit"

rm ./execute.sh
node scripts/remove-init-boilerplate.js
node scripts/create-initial-files.js

cp .env.example .env
pnpm set:env 1

mkdir ./docs
touch ./docs/data-modeling.md
touch ./docs/requirements.md
touch ./docs/next-steps.md

echo "Now, set the Prisma Model and migrate"
