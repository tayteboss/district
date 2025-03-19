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
  const [talentModalIsOpen, setTalentModalIsOpen] = useState(false);
  const [activeTalentData, setActiveTalentData] = useState<
    boolean | TalentType
  >(false);
  const [activeTalentSlug, setActiveTalentSlug] = useState<boolean | string>(
    false
  );

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

  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <TalentModal
        isActive={talentModalIsOpen}
        data={activeTalentData}
        setTalentModalIsOpen={setTalentModalIsOpen}
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
