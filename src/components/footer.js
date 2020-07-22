import React from "react";
import styled from "@emotion/styled";

export default function footer() {
  return (
    <Footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mcespo">linkedin</a>
        </li>
        <li>
          <a href="https://github.com/mcespo">github</a>
        </li>
        <li>
          <a href="https://codepen.io/mcespo">codepen</a>
        </li>
        <li>
          <a href="https://dev.to/mcespo">dev</a>
        </li>
      </ul>
      <p>© {new Date().getFullYear()}, Marvin Cespedes</p>
    </Footer>
  );
}

const Footer = styled.footer`
  margin-bottom: 5vh;
  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    a {
      font-weight: 400;
      &:after {
        height: 1%;
      }
      &:hover {
        color: initial;
      }
    }
  }
  p {
    max-width: 100%;
    text-align: center;
    font-size: 0.85rem;
  }
`;
