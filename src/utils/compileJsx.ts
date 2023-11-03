import { transform as esbuildTransform } from 'esbuild-wasm';

export const ReactFragmentPragma = 'R_F';
export const ReactCreateElementPragma = 'R_cE';

export const openFragmentTag = '<>';
export const closeFragmentTag = '</>';

export const compileJsx = (code: string) =>
  esbuildTransform(`${openFragmentTag}${code.trim()}${closeFragmentTag}`, {
    loader: 'jsx',
    jsxFactory: ReactCreateElementPragma,
    jsxFragment: ReactFragmentPragma,
  });

export const validateCode = (code: string) => {
  try {
    compileJsx(code);
    return true;
  } catch (err) {
    return false;
  }
};
