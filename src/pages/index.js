import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default function Home() {
  return (
    <Layout>
    <div style={{ color: `purple`}}>
      <Link to="/contact/">Contact</Link>
      <p></p>
      <Link to="/about/">About</Link>
      <p></p>
      <Link to="/about-css-modules/">About CSS Modules</Link>
      <Header headerText="Hello Gatsby!" />
    <p>What a world!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </div>
    </Layout>
  );
}