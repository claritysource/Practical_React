import React, {useRef, useState, useEffect} from 'react'
import './App.css'

const Header = () => {
  return (
    <div className="Header">
      Header
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="Sidebar">
      Sidebar
    </div>
  )
}

const Main = () => {
  return (
    <div className="Main">
      Main
    </div>
  )
}

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  )
}

const Start = () => {
  return (
    <Layout />
  )
}

export default Start