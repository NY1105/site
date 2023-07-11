import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Nicholas Yan</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider attribute="class">
				<div
					id="App"
					className="text-black bg-white dark:bg-gray-800 dark:text-white h-full overflow-y-hidden"
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</div>
			</ThemeProvider>
		</>
	)
}