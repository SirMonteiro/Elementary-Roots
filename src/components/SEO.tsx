import Head from 'next/head'

type SEOProps = {
  title: string
  description: string
}

export function SEO({ title, description }: SEOProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
