module.exports = {
  apps: [
    {
      name: "api",
      exec_mode: "cluster",
      instances: "max",
      script: "npm",
      args: "start",
      autorestart: true,
      exec_mode: "fork",
      listen_timeout: 50000,
      kill_timeout: 5000,
      autorestart: true,
      watch: true,
      env: { ...process.env },
      env_production: {
        PORT: process.env.APP_PORT ?? 3003,
        NODE_ENV: "production",
        ...process.env,
      },
      env_development: {
        PORT: process.env.APP_PORT ?? 3003,
        NODE_ENV: "development",
        ...process.env,
      },
    },
  ],
};
