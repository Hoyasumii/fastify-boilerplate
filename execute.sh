#!/bin/bash

rm -rf .git

git init
git add .
git commit -m "Initial Commit"

rm ./execute.sh
node scripts/remove-init-boilerplate.js

cp .env.example .env
pnpm set:env 1
