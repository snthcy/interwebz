import Head from 'next/head';
import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';
import {useRouter} from "next/router";
import NextLink from 'next/link';
import config from "../lib/config";
import SocialLink from './Socials';

export default function Container(props) {
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const {children, ...customMeta} = props;
    const router = useRouter();

    return (
        <div className="bg-black dark:bg-white flex flex-col min-h-screen">
            <Head>
                <title>{config.title}</title>
                <meta content={config.description} name="description"/>
                <meta property="og:url" content={`https://synthicy.com${router.asPath}`}/>
                <meta property="og:type" content='website'/>
                <meta property="og:site_name" content="hi"/>
                <meta property="og:description" content={config.description}/>
                <meta property="og:title" content={config.title}/>
                <meta property="og:image" content={config.image}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content={config.author.twitter}/>
                <meta name="twitter:title" content={config.title}/>
                <meta name="twitter:description" content={config.description}/>
                <meta name="twitter:image" content={config.author.image}/>
            </Head>
            <header>

                <nav
                    className="w-full flex justify-start items-center mx-auto max-w-4xl px-8 my-20">

                    <a aria-label="home"
                       className="text-gray-50 focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-pink-300 dark:text-gray-900 dark:hover:text-pink-500"
                       href="/">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-europe"
                             className="svg-inline--fa fa-globe-europe fa-w-16 w-4 h-4" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fill="currentColor"
                                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm200 248c0 22.5-3.9 44.2-10.8 64.4h-20.3c-4.3 0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2 0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3 8-3.3h32c6.2 0 11.3-5.1 11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16 7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5 4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4 18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8 0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6 7.2-10.9 7.2-17.5 0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6 3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8 0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9 3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7 448 256zM130.1 149.1c0-3 1.2-5.9 3.3-8l25.4-25.4c2.1-2.1 5-3.3 8-3.3 6.2 0 11.3 5.1 11.3 11.3v16c0 3-1.2 5.9-3.3 8l-9.4 9.4c-2.1 2.1-5 3.3-8 3.3h-16c-6.2 0-11.3-5.1-11.3-11.3zm128 306.4v-7.1c0-8.8-7.2-16-16-16h-20.2c-10.8 0-26.7-5.3-35.4-11.8l-22.2-16.7c-11.5-8.6-18.2-22.1-18.2-36.4v-23.9c0-16 8.4-30.8 22.1-39l42.9-25.7c7.1-4.2 15.2-6.5 23.4-6.5h31.2c10.9 0 21.4 3.9 29.6 10.9l43.2 37.1h18.3c8.5 0 16.6 3.4 22.6 9.4l17.3 17.3c3.4 3.4 8.1 5.3 12.9 5.3H423c-32.4 58.9-93.8 99.5-164.9 103.1z"/>
                        </svg>
                    </a>

                    <div>
                        <NextLink href="/">
                            <a className="text-gray-50 focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-pink-300 dark:text-gray-900 dark:hover:text-pink-500">dashboard</a>
                        </NextLink>
                        <NextLink href="/">
                            <a className="text-gray-50 focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-pink-300 dark:text-gray-900 dark:hover:text-pink-500">collections</a>
                        </NextLink>
                    </div>
                    <div className="ml-auto">
                        <button
                            aria-label="make it dark"
                            type="button"
                            className="bg-gray-800 dark:bg-gray-200 rounded p-3 h-10 w-10"
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                        >
                            {mounted && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="h-4 w-4 text-gray-200 dark:text-gray-800"
                                >
                                    {resolvedTheme === 'dark' ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    )}
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </header>
            <main className="flex flex-col justify-center bg-black dark:bg-white px-8">
                {children}
            </main>
        </div>
    )
}
