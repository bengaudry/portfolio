module.exports = {
    apps: [
        {
            name: 'mon-site-astro',
            script: './dist/server/entry.js',
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
