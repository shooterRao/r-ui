#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "start build..."
# 生成静态文件
yarn build-storybook

echo "build success"

# 进入生成的文件夹
cd storybook-static

echo "start deploy..."

# 提交到  gh-pages
git init
git add .
git commit -m '🎉deploy'

git push -f git@github.com:shooterRao/r-ui.git master:gh-pages

echo "deploy success"

cd -

rm -rf storybook-static