import Head from 'next/head'
import Alert from './components/Alert'
import LookingFor from './components/LookingFor'
import Navbar from './components/Navbar'
import Promotions from './components/Promotions'
import SelectLocation from './components/SelectLocation'
import Solutions from './components/Solutions'
import ConctactForm from './components/ContactForm'
import FeedbackButton from './components/FeedbackButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>WeWork | Soluciones de espacio de trabajo y oficina</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.wework.com/vanilla-assets/images/we_logo.a32545795fe3f59def511d1b8069c271.svg" />
      </Head>
      <Alert />
      <Navbar />

      <main>
        <FeedbackButton />
        <SelectLocation />
        <LookingFor />
        <Promotions />
        <Solutions />
        <ConctactForm />
      </main>
    </>
  )
}
