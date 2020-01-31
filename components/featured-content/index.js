import { FeaturedWrap } from './style';
import FeaturedGuides from './guides';
import Projects from './projects';

const FeaturedContent = (props) => (
  <FeaturedWrap className="border-top bg-light">
    <Projects />
    <FeaturedGuides />
  </FeaturedWrap>
);

FeaturedContent.defaultProps = {
  className: '',
};

export default FeaturedContent;
