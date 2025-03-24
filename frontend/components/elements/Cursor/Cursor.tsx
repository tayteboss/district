import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useMousePosition } from "../../../hooks/useMousePosition";
import pxToRem from "../../../utils/pxToRem";
import LinkArrow from "../../svgs/LinkArrow";

type Props = {
  cursorRefresh: () => void;
  appCursorRefresh: number;
};

type StyledProps = {
  $isHoveringLink?: boolean;
  $isOnDevice?: boolean;
};

const CursorWrapper = styled.div<StyledProps>`
  z-index: 1000;
  position: fixed;
  display: ${(props) => (props.$isOnDevice ? "none" : "block")};

  @media ${(props) => props.theme.mediaBreakpoints.mobile} {
    display: none;
  }
`;

const CursorRing = styled(motion.div)<StyledProps>`
  position: fixed;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: center;
  top: ${(props) => (props.$isHoveringLink ? "-75px" : "-100px")};
  left: ${(props) => (props.$isHoveringLink ? "-75px" : "-100px")};
  height: ${(props) => (props.$isHoveringLink ? "150px" : "200px")};
  width: ${(props) => (props.$isHoveringLink ? "150px" : "200px")};
  mix-blend-mode: soft-light;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    rgba(246, 244, 237, 0.4) 40%,
    transparent 65%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);

  transition:
    top 500ms ease,
    left 500ms ease,
    height 500ms ease,
    width 500ms ease,
    opacity 300ms ease;
`;

const Cursor = ({ cursorRefresh, appCursorRefresh }: Props) => {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isOnDevice, setIsOnDevice] = useState(false);
  const router = useRouter();
  const position = useMousePosition();

  let mouseXPosition = position.x;
  let mouseYPosition = position.y;

  const variantsWrapper = {
    visible: {
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.01,
        stiffness: 800,
        damping: 20,
        ease: "linear",
      },
    },
  };

  const clearCursor = () => {
    setIsHoveringLink(false);
    setIsOnDevice(false);
  };

  const findActions = () => {
    const aLinks = document.querySelectorAll("a");
    const cursorLinks = document.querySelectorAll(".cursor-link");

    cursorLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        setIsHoveringLink(true);
      });
      link.addEventListener("mouseleave", () => {
        setIsHoveringLink(false);
      });
      link.addEventListener("mouseup", () => {
        setIsHoveringLink(false);
      });
    });

    aLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        setIsHoveringLink(true);
      });
      link.addEventListener("mouseleave", () => {
        setIsHoveringLink(false);
      });
      link.addEventListener("mouseup", () => {
        setIsHoveringLink(false);
      });
    });

    // checking if on a device
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setIsOnDevice(true);
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      setIsOnDevice(true);
    }
  };

  useEffect(() => {
    findActions();

    const timer = setTimeout(() => {
      findActions();
    }, 1000);

    return function cleanUp() {
      clearCursor();
      clearTimeout(timer);
    };
  }, [cursorRefresh, appCursorRefresh]);

  // reset cursor on page change
  useEffect(() => {
    clearCursor();
  }, [router.pathname, router.asPath, router.query.slug, cursorRefresh]);

  return (
    <>
      <CursorWrapper $isOnDevice={isOnDevice} className="cursor-wrapper">
        <CursorRing
          $isHoveringLink={isHoveringLink}
          variants={variantsWrapper}
          animate="visible"
          layout
        />
      </CursorWrapper>
    </>
  );
};

export default Cursor;
