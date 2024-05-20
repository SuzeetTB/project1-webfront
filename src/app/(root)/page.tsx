/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import logo from '../../public/icons/logo.svg'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

type Props = {}

const Home = (props: Props) => {
  const loggedIn = {firstname:"Suzeet"}
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstname || "Guest User"}
            subtext="Access and manage your expenditures and transations"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.55}
          />
        </header>
      </div>
    </section>
  )
}

export default Home