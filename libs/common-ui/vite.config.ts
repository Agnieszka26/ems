import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import * as path from 'path';
export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/common-ui',

  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md']), dts({
    entryRoot: 'src',
    tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
  }),
  react(),
  nxViteTsPaths(), ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/common-ui',
      provider: 'v8',
    },
  },
});
