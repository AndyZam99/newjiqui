import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gobierno de Jiquilpan - Juntos somos más</title>
        <meta
          name="description"
          content="Descubre Jiquilpan, Michoacán, un municipio lleno de historia, cultura y naturaleza. En el periodo 2024-2027, el gobierno se enfoca en el desarrollo sostenible, impulsando el turismo, la educación y la innovación local. Jiquilpan te invita a explorar sus encantos y a disfrutar de su vibrante patrimonio cultural y natural."
        />
        <meta name="keywords" content="Jiquilpan Michoacán 2024-2027, Gobierno Jiquilpan 2024-2027, Desarrollo sostenible Jiquilpan, Turismo en Jiquilpan Michoacán, Cultura en Jiquilpan, Innovación en Jiquilpan 2024-2027, Educación en Jiquilpan, Patrimonio cultural de Jiquilpan, Progreso en Jiquilpan Michoacán, Historia de Jiquilpan Michoacán" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Gobierno de Jiquilpan - Juntos somos más" />
        <meta
          property="og:description"
          content="Descubre Jiquilpan, Michoacán, un municipio lleno de historia, cultura y naturaleza. En el periodo 2024-2027, el gobierno se enfoca en el desarrollo sostenible, impulsando el turismo, la educación y la innovación local. Jiquilpan te invita a explorar sus encantos y a disfrutar de su vibrante patrimonio cultural y natural."
        />
        <meta property="og:image" content="https://res.cloudinary.com/dqwuwopvc/image/upload/v1725142757/portadas/Portadas_Web_hfuzlw.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}