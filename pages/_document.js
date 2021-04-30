import Document, {Html, Head, Main, NextScript} from 'next/document';

class NextDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="../public/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link href="../public/static/favicons/favicon.ico" rel="shortcut icon"/>
                    <link href="../public/static/favicons/site.webmanifest" rel="manifest"/>
                    <link
                        href="../public/static/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="../public/static/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="../public/static/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#4a9885"
                        href="../public/static/favicons/safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                    <meta content="#000000" name="theme-color"/>
                    <meta content="#000000" name="msapplication-TileColor"/>
                    <meta
                        content="../public/static/favicons/browserconfig.xml"
                        name="msapplication-config"
                    />
                </Head>
                <body className="bg-black dark:bg-white text-white dark:text-black">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default NextDocument;