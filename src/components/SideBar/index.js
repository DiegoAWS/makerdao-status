import React from "react";
import styled from "styled-components";
import { routes } from "../../routes";
import { useHistory, useLocation } from "react-router-dom";
const SidebarContainer = styled.div`
  width: 200px;
  background: #bfc1c7;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 2rem 0.5rem;
  box-sizing: border-box;

  .sidebarLink {
    margin: 2rem 0;
    border-radius: 10px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #e0e0e0;
    }

    &.activeLink {
      background: #e0e0e0;
      box-shadow: 0 0 10px 2px #989898;
    }
  }
`;

export default function SideBar() {
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <SidebarContainer>
      {routes.map((item, i) => (
        <div
          className={`sidebarLink ${
            item.path === pathname ? "activeLink" : ""
          }`}
          key={i}
          onClick={() => {
            push(item.path);
          }}
        >
          {item.label}
        </div>
      ))}
    </SidebarContainer>
  );
}
