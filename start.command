#!/bin/zsh

cd "$(dirname "$0")" || exit 1

# Make Node/npm available when this file is opened by double-clicking in Finder.
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

if [ -s "$HOME/.nvm/nvm.sh" ]; then
  source "$HOME/.nvm/nvm.sh"
fi

echo "🐶 小八的家 - 正在启动服务器..."

if ! command -v npx >/dev/null 2>&1; then
  echo "没有找到 npx。请先安装 Node.js，或确认 npm/npx 已加入 PATH。"
  echo
  echo "可以先在终端运行："
  echo "  node -v"
  echo "  npm -v"
  echo "  which npx"
  echo
  echo "按任意键关闭窗口..."
  read -k 1
  exit 1
fi

npx serve -s .

echo
echo "服务器已停止。按任意键关闭窗口..."
read -k 1
