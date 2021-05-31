#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

cp CNAME docs/.vuepress/dist/

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git -c user.name=$1 -c user.email=$2 commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f git@github.com:zlatsic/blog-vue.git master:gh-pages

cd -
