import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [vue()],
        server: {
            proxy: {
                "/api": {
                    target: 'https://api.school-os.net/kworld',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
                "/testApi": {
                    target: 'https://kr.trip.com/restapi/soa2/27015/FlightListSearch?x-traceID=1710205163015.326epKjcT9bJ-1719990960981-1362392875',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/testApi/, ""),
                },
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    };
});
