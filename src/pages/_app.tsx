import { AmplifyProvider, ColorMode, Heading } from '@aws-amplify/ui-react';
import * as React from 'react';
import { useRouter } from 'next/dist/client/router';
import { myTheme } from '../theme';
import '../styles/index.scss';
import { Header } from '../components/Layout/Header';
import { MDXProvider } from '@mdx-js/react';

const components = {};

function App({ Component, pageProps }) {
  const router = useRouter();
  const { platform = 'react' } = router.query;
  const [colorMode, setColorMode] = React.useState('system');
  const [themeOverride, setThemeOverride] = React.useState('amplify-docs');

  return (
    <>
      <AmplifyProvider theme={myTheme} colorMode={colorMode as ColorMode}>
        <Header
          colorMode={colorMode}
          setColorMode={setColorMode}
          platform={platform}
        ></Header>
        <MDXProvider components={components}>
          <Component
            platform={platform}
            colorMode={colorMode}
            setColorMode={setColorMode}
          ></Component>
        </MDXProvider>
      </AmplifyProvider>
    </>
  );
}

export default App;
