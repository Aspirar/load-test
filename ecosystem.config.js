module.exports = {
	apps: [
		{
			name: 'load-test',
			script: 'index.js',
			instances: 'max',
			exec_mode: 'cluster',
			autorestart: true,
			watch: false,
			max_memory_restart: '3G',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
			output: '/var/log/load-test/test.log',
			error: '/var/log/load-test/test.log',
			merge_logs: true,
			max_restarts: 5,
			restart_delay: 10000,
			min_uptime: 100000,
		},
	],
}
