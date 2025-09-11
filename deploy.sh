#!/bin/bash

# 配置变量 - 请修改为你的实际值
EC2_KEY="path/to/your-key.pem"  # 替换为你的密钥路径
EC2_HOST="ec2-user@3.26.44.64"
PROJECT_DIR="react-portfolio"

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 开始部署 React Portfolio 项目${NC}"

# 检查必需文件
if [ ! -f "server.js" ]; then
    echo -e "${RED}❌ server.js 文件不存在${NC}"
    exit 1
fi

if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json 文件不存在${NC}"
    exit 1
fi

echo -e "${YELLOW}🏗️  构建 React 应用...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 构建失败!${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 同步项目文件到 EC2...${NC}"
rsync -avz --delete --progress \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'src' \
    --exclude 'public' \
    --exclude '.env.local' \
    --exclude '.env.development' \
    --exclude 'deploy.sh' \
    -e "ssh -i $EC2_KEY -o StrictHostKeyChecking=no" \
    ./ $EC2_HOST:~/$PROJECT_DIR/

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 文件同步失败!${NC}"
    exit 1
fi

echo -e "${YELLOW}🔧 在服务器上安装依赖和配置...${NC}"
ssh -i $EC2_KEY -o StrictHostKeyChecking=no $EC2_HOST << EOF
    cd ~/$PROJECT_DIR
    
    echo "📋 安装生产依赖..."
    npm install --only=production
    
    echo "📁 创建必要目录..."
    mkdir -p logs
    
    echo "🔍 检查 .env 文件..."
    if [ ! -f .env ]; then
        echo "⚠️  .env 文件不存在，请手动创建并配置邮件服务"
        cp .env.example .env 2>/dev/null || true
    fi
    
    echo "🔄 重启 PM2 应用..."
    pm2 stop react-portfolio 2>/dev/null || true
    pm2 delete react-portfolio 2>/dev/null || true
    pm2 start ecosystem.config.js --env production
    pm2 save
    
    echo "📊 检查应用状态..."
    sleep 3
    pm2 status
    
    echo "✅ 部署完成"
EOF

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 服务器配置失败!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ 部署成功完成!${NC}"
echo -e "${GREEN}🌐 网站地址: http://3.26.44.64${NC}"
echo -e "${GREEN}🔗 API测试: http://3.26.44.64/api/health${NC}"
echo ""
echo -e "${BLUE}📋 有用的命令:${NC}"
echo -e "${YELLOW}  查看状态: ssh -i $EC2_KEY $EC2_HOST 'pm2 status'${NC}"
echo -e "${YELLOW}  查看日志: ssh -i $EC2_KEY $EC2_HOST 'pm2 logs react-portfolio'${NC}"
echo -e "${YELLOW}  重启应用: ssh -i $EC2_KEY $EC2_HOST 'pm2 restart react-portfolio'${NC}"