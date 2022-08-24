import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ChatDashboard from '../src/common/modules/ChatDashboard'
import '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <ChatDashboard />
  )
}

export default Home
