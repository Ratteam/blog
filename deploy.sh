# 自动部署脚本  

# 构建
yarn docs:build
# 导航到构建输出目录
cd docs/.vuepress/dist

# 第一次使用
git init
git add -A
git commit -m 'deploy'

# 推到你仓库的 master 分支
git push -f https://github.com/RatFrog/ratfrog.github.io.git master
