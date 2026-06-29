@echo off
echo 🐶 小八的家 - 正在启动服务器...
npx serve -l 3000 -s .
start http://localhost:3000/
pause
