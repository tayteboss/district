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
    if (!activeTalentSlug || !talentModalIsOpen) {
      setActiveTalentData(false);
      setActiveTalentSlug(false);
      return;
    }

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

    if (talentModalIsOpen || menuIsOpen) {
      lenis.stop();
      body.classList.add("modal-open");
    } else {
      lenis.start();
      body.classList.remove("modal-open");
    }
  }, [talentModalIsOpen, menuIsOpen, lenis]);

  useEffect(() => {
    setTalentModalIsOpen(false);
    setMenuIsOpen(false);
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
        facebookUrl={siteOptions?.facebookUrl}
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
        facebook={siteOptions?.facebookUrl}
      />
    </>
  );
};

export const useTalentModalContext = () => useContext(TalentModalContext);

export default Layout;
