import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Literals } from '../../../utilities/literals';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

const NavigateBackLink = styled(Link)({
  color: '#1d524dd9',
  textDecoration: 'none',
  fontWeight: 800,
  textTransform: 'uppercase',
  fontSize: 20,
});

interface BackButtonProps {
  navigate: string;
}

const BackButton = ({ navigate }: BackButtonProps) => {
  const backTo = navigate === 'home' ? '/' : navigate;
  return (
    <motion.div initial='exit' animate='enter' exit='exit'>
      <motion.div variants={backVariants}>
        <NavigateBackLink to={backTo}>
          ← {Literals.actions.back}
        </NavigateBackLink>
      </motion.div>
    </motion.div>
  );
};
export default BackButton;
