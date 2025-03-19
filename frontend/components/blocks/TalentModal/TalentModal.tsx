import styled from "styled-components";
import { TalentType } from "../../../shared/types/types";
import { AnimatePresence, motion } from "framer-motion";

const TalentModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100lvh;
  width: 100%;
  z-index: 110;
  background: red;
`;

const wrapperVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

type Props = {
  isActive: boolean;
  data: boolean | TalentType;
  setTalentModalIsOpen: (state: boolean) => void;
};

const TalentModal = (props: Props) => {
  const { isActive, data, setTalentModalIsOpen } = props;

  return (
    <AnimatePresence>
      {isActive && (
        <TalentModalWrapper
          variants={wrapperVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setTalentModalIsOpen(false)}
        >
          TalentModal
        </TalentModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default TalentModal;
