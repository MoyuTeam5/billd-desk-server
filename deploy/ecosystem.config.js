/** @type {import('/Users/huangshuisheng/Library/pnpm/global/5/.pnpm/pm2@5.4.2/node_modules/pm2/types/index').StartOptions} */
const data = {
  name: 'billd-desk-server',
  exec_mode: 'fork',
  instances: 1,
  script: './dist/index.js',
  log_date_format: 'YYYY-MM-DD HH:mm:ss:SSS',
  out_file: '/root/.pm2/logs/billd-desk-server-ok.log',
  error_file: '/root/.pm2/logs/billd-desk-server-err.log',
  watch: false,
  env: {
    NODE_APP_RELEASE_PROJECT_NAME: 'billd-desk-server',
    NODE_APP_RELEASE_PROJECT_ENV: 'prod',
    NODE_APP_RELEASE_PROJECT_PORT: '4300',
    NODE_ENV: 'production',
  },
};
module.exports = {
  apps: [data],
};
