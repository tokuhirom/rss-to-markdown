import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts', // エントリーポイント
      formats: ['cjs'], // CommonJS フォーマット
      fileName: () => 'main.js',
    },
    outDir: 'dist', // 出力ディレクトリ
    rollupOptions: {
      external: [], // 必要なら外部依存関係を指定
    },
    target: 'node16', // 対応 Node.js バージョン
    minify: false, // GitHub Actions 用なので縮小化を無効化
    sourcemap: true, // ソースマップを生成
  },
});
