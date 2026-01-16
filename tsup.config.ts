import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'constants/index': 'src/constants/index.ts',
    'types/index': 'src/types/index.ts',
    'ui/index': 'src/ui/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react-router-dom'],
  treeshake: true,
});
