import Head from 'next/head'
import { Layout } from 'components'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pagina de vendas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  )
}
export default Home;