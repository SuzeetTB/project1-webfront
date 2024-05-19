/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import logo from '../../public/icons/logo.svg'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Image
            src={logo}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          Home</div>
  )
}

export default Home