// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Script para carregar o gtag.js */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16927863030"
      />
      {/* Script de configuração do gtag */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16927863030');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
