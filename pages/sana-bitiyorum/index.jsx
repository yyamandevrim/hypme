import Head from 'next/head';

export const metadata = {
  title: 'HYPME!',
  description: '',
};

const Spotify = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; URL=https://open.spotify.com/track/6enEuoNKa43nN51JQhdCAI" />
      </Head>
    </>
  );
};

export default Spotify;
