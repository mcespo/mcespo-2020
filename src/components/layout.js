/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { injectGlobal } from "emotion";
import emotionReset from "emotion-reset";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

injectGlobal`
${emotionReset}

:root {
  --violet: hsl(236, 56%, 42%);
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "IBM Plex Sans", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  width: 100%;
  min-height: 100vh;
  background-size: 300% 300%;
  background-image: linear-gradient(-45deg, #FEECF0 0%, #F2F6F7 25%, #F7F3F3 50%, #EFFAFA 100%);
  animation: background-shift 20s ease infinite;
}

main {
  margin: 10vh 0;
  width: 80vw;
  @media screen and (min-width: 750px) {
    max-width: 650px;
  }
}

h1 {
  text-align: right;
  font-weight: 300;
  color: var(--violet);
  font-size: 2rem;
  @media screen and (min-width: 750px) {
    font-size: 3rem;
  }
}

p {
    max-width: 60ch;
    margin-bottom: 1.6rem;
    font-size: 1rem;
    @media screen and (min-width: 750px) {
      font-size: 1.18rem;
    }
}

a {
  font-weight: 700;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: black;
  padding: 0 2px;
  transition: color ease-out 150ms;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 0.15rem;
    left: 0;
    bottom: 0;
    background-color: var(--violet);
    transition: all ease-out 150ms;
  }

  &:hover {
    color: white;

    &::after {
      height: 100%;
    }
  }

}

@keyframes background-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;
