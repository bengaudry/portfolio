module.exports = {
    apps: [
        {
            name: 'astro-portfolio-backend',
            script: './server/entry.mjs',
            instances: 'max',
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                PORT: 4321,
                HOST: '127.0.0.1'
            }
        }
    ]
};
