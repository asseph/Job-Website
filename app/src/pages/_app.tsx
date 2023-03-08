import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Realm</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen bg-neutral font-custom1">
              <Notifications />
              
              <ContentContainer>
                <Component {...pageProps} />
              </ContentContainer>
              
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
