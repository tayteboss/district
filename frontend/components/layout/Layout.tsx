import styled from "styled-components";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { ReactNode, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Menu from "../blocks/Menu";

const siteOptions = require("../../json/siteSettings.json");

const Main = styled.main``;

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const lenis = useLenis(({ scroll }) => {});

  console.log("siteOptions", siteOptions);

  return (
    <>
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <ReactLenis root>
        <Main>{children}</Main>
      </ReactLenis>
      <Footer
        email={siteOptions?.email}
        instagram={siteOptions?.instagramUrl}
        tiktok={siteOptions?.tiktokUrl}
        facebook={siteOptions?.facebookUrl}
      />
    </>
  );
};

export default Layout;
