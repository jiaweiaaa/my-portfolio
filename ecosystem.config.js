module.exports = {
  apps: [{
    name: 'react-portfolio',
    script: 'server.js',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    merge_logs: true
  }],

  deploy: {
    production: {
      user: 'ec2-user',
      host: '3.26.44.64',
      ref: 'origin/main',
      repo: 'your-git-repo-url',
      path: '/home/ec2-user/react-portfolio',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --only=production && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};