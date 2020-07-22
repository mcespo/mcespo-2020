import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article>
      <h1>marvin céspedes</h1>
      <p>
        Howdy, I am a UX/UI frontend developer and web designer residing in
        beautiful (and mostly chilly) Chicago, Illinois.
      </p>
      <p>
        Professionally, I have worked on UX development for{" "}
        <a href="https://www.benchmarkanalytics.com/">Benchmark Analytics</a>;
        Frontend developer, and contributor of Conversant Media's internal{" "}
        <a href="https://cui.conversantmedia.com/">Design Systems Library</a>;{" "}
        Frontend developer for Vox Media's
        <a href="https://concert.io/">Concert Advertising Units</a>; Frontend
        developer for <a href="https://www.grainger.com/">Grainger</a>; and
        Frontend developer / graphic designer for the{" "}
        <a href="https://www.chicityclerk.com/">
          Office of the Chicago City Clerk
        </a>
        .
      </p>
      <p>
        Additionally, I volunteer as a designer, developer, and webmaster for
        the nonprofit organizations:{" "}
        <a href="http://a4th.org/" title="A4TH website">
          Artists for the Humanities
        </a>{" "}
        and,{" "}
        <a
          href="https://intersectionchicago.org/"
          title="Intersection Chicago website"
        >
          Intersection
        </a>
        . I am also a former instructor/TA for,{" "}
        <a
          href="https://www.girldevelopit.com/"
          title="GDI Chicago Chapter website"
        >
          Girl Develop It Chicago
        </a>
        , and occasionally tutor frontend development online.
      </p>
      <p>
        I also do freelance photography/video work, am at the beck and call of a{" "}
        <a
          href="https://www.instagram.com/p/BZmbSzFnZu1/?taken-by=mcespo.jpeg"
          title="Meli the Golden, Instagram image"
        >
          golden retriever
        </a>
        , and make{" "}
        <a
          href="https://www.instagram.com/p/zpfd9aEbwo/?taken-by=mcespo.jpeg"
          title="Marvin Macchiato, Instagram image"
        >
          wicked-good coffee
        </a>
        .
      </p>
      <p>
        Now that we have all the housekeeping taken care of, feel free to click
        around at some of my projects above, any links to GitHub, LinkedIn, etc.
        below, or just feel free to{" "}
        <a
          href="mailto:mcespo@gmail.com?&amp;subject=Oh%20hello%20Marvin,%20you're%20so%20cool!&amp;body=I%20wish%20to%20be%20marginally%20as%20attractive%20as%20you%20are.%20Please%20help!%20Also,%20I%20wanted%20to%20ask..."
          title="Email Marvin Cespedes, and tell him all of your dreams"
        >
          ask me something
        </a>
        .
      </p>
      <p>Stay safe out there.</p>
    </article>
  </Layout>
);

export default IndexPage;
