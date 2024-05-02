/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <CloseButton>
        <Icon id="close" strokeWidth={2} onClick={onDismiss} />
      </CloseButton>
      <Content>
        <nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </nav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: hsl(0deg 0% 0% / 0.5);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  gap: 180px;
  height: 100vh;
  width: 80vw;
  padding: 32px;
  background-color: var(--color-white);

  a {
    text-decoration: none;
  }

  nav {
    display: flex;
    flex-flow: column nowrap;
    gap: 22px;

    > a {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-gray-900);
      text-transform: uppercase;

      &:first-of-type {
        color: var(--color-secondary);
      }
    }
  }

  footer {
    display: flex;
    flex-flow: column nowrap;
    gap: 22px;

    > a {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-gray-700);
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

export default MobileMenu;
