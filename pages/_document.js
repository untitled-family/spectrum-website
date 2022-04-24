import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Kinetic Spectrums is a collection of dynamic, ever changing artworks stored on the Ethereum Network."
        />
        <meta name="image" content="https://kineticspectru.ms/meta-og.png" />
        <meta
          itemProp="name"
          content="Kinetic Spectrums - 1,111 Spectrums. 100% on-chain NFTs"
        />
        <meta
          itemProp="description"
          content="Kinetic Spectrums is a collection of dynamic, ever changing artworks stored on the Ethereum Network."
        />
        <meta
          itemProp="image"
          content="https://kineticspectru.ms/meta-og.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Kinetic Spectrums - 1,111 Spectrums. 100% on-chain NFTs"
        />
        <meta
          name="twitter:description"
          content="Kinetic Spectrums is a collection of dynamic, ever changing artworks stored on the Ethereum Network."
        />
        <meta name="twitter:site" content="@pixel_arts" />
        <meta name="twitter:creator" content="@biron_io" />
        <meta
          name="twitter:image:src"
          content="https://kineticspectru.ms/meta-og.png"
        />
        <meta
          name="og:title"
          content="Kinetic Spectrums - 1,111 Spectrums. 100% on-chain NFTs"
        />
        <meta
          name="og:description"
          content="Kinetic Spectrums is a collection of dynamic, ever changing artworks stored on the Ethereum Network."
        />
        <meta name="og:image" content="https://kineticspectru.ms/meta-og.png" />
        <meta name="og:url" content="https://kineticspectru.ms/" />
        <meta name="og:site_name" content="Kinetic Spectrums" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/epic.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
