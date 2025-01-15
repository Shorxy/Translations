/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://help.forestracks.com'),
  title: {
    template: '%s - ForestRacks Help'
  },
  description: 'ForestRacks articles and documentation',
  applicationName: 'ForestRacks',
  generator: 'Next.js',
  appleWebApp: {
    title: 'ForestRacks'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://help.forestracks.com'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>© 2024</b>{' '}
          <span style={{ opacity: '60%' }}>Forest Racks LLC</span>
        </div>
      }
      chatLink="https://discord.forestracks.com"
    />
  )
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/ForestRacks/Knowledgebase/blob/Production"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
