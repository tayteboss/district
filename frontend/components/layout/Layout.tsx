import styled from "styled-components";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Menu from "../blocks/Menu";
import { TalentType } from "../../shared/types/types";
import TalentModal from "../blocks/TalentModal";
import ContactModal from "../blocks/ContactModal";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

const siteOptions = require("../../json/siteSettings.json");
const talentData = require("../../json/talentData.json");

const Main = styled.main``;

type Props = {
  children: ReactNode;
};

type TalentModalContextType = {
  setActiveTalentSlug: React.Dispatch<React.SetStateAction<string | boolean>>;
  setTalentModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TalentModalContext = createContext<TalentModalContextType | null>(
  null
);

const Layout = (props: Props) => {
  const { children } = props;

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const [talentModalIsOpen, setTalentModalIsOpen] = useState(false);
  const [activeTalentData, setActiveTalentData] = useState<
    boolean | TalentType
  >(false);
  const [activeTalentSlug, setActiveTalentSlug] = useState<boolean | string>(
    false
  );

  const lenis = useLenis(({ scroll }) => {});
  const router = useRouter();

  useEffect(() => {
    if (!activeTalentSlug) return;

    const talent = talentData.find(
      (talent: TalentType) => talent.slug.current === activeTalentSlug
    );

    if (talent) {
      setActiveTalentData(talent);
    }
  }, [activeTalentSlug]);

  useEffect(() => {
    if (!lenis) return;

    const body = document.body;

    if (talentModalIsOpen || menuIsOpen || contactModalIsOpen) {
      lenis.stop();
      body.classList.add("modal-open");
    } else {
      lenis.start();
      body.classList.remove("modal-open");
    }
  }, [contactModalIsOpen, talentModalIsOpen, menuIsOpen, lenis]);

  useEffect(() => {
    setTalentModalIsOpen(false);
    setMenuIsOpen(false);
    setContactModalIsOpen(false);
  }, [router.asPath]);

  return (
    <>
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
        contactModalIsOpen={contactModalIsOpen}
      />
      <Menu
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <TalentModal
        isActive={talentModalIsOpen}
        data={activeTalentData}
        setTalentModalIsOpen={setTalentModalIsOpen}
      />
      <ContactModal
        isActive={contactModalIsOpen}
        instagramUrl={siteOptions?.instagramUrl}
        tiktokUrl={siteOptions?.tiktokUrl}
        linkedinUrl={siteOptions?.linkedinUrl}
        phone={siteOptions?.phone}
        email={siteOptions?.email}
        officeAddress={siteOptions?.officeAddress}
        officeGoogleMapsLink={siteOptions?.officeGoogleMapsLink}
        forBrandsButtonTitle={siteOptions?.forBrandsButtonTitle}
        forBrandsButtonLink={siteOptions?.forBrandsButtonLink}
        forTalentButtonTitle={siteOptions?.forTalentButtonTitle}
        forTalentButtonLink={siteOptions?.forTalentButtonLink}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <ReactLenis root>
        <TalentModalContext.Provider
          value={{ setActiveTalentSlug, setTalentModalIsOpen }}
        >
          <Main>{children}</Main>
        </TalentModalContext.Provider>
      </ReactLenis>
      <Footer
        email={siteOptions?.email}
        instagram={siteOptions?.instagramUrl}
        tiktok={siteOptions?.tiktokUrl}
        linkedin={siteOptions?.linkedinUrl}
        setContactModalIsOpen={setContactModalIsOpen}
      />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="district-cookie-consent"
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(10px)",
          maxWidth: "450px",
          margin: "0 16px 16px",
          borderRadius: "4px",
          color: "#FFF",
          fontSize: "13px",
        }}
        buttonStyle={{
          color: "var(--colour-black)",
          background: "var(--colour-matcha)",
          borderRadius: "4px",
          fontSize: "13px",
        }}
        expires={150}
      >
        "This website uses cookies to enhance the user experience."
      </CookieConsent>
    </>
  );
};

export const useTalentModalContext = () => useContext(TalentModalContext);

export default Layout;
