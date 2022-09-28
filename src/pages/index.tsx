import type { NextPage } from 'next'
import Head from 'next/head'
import { Card1 } from '../components/Card1'
import { Card2 } from '../components/Card2'
import { Card3 } from '../components/Card3'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Murilo - MySkills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:grid flex flex-col py-4 mr-4 ml-4 md:px-0 md:grid-cols-5 gap-3 max-w-7xl mx-auto">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  )
}

export default Home
