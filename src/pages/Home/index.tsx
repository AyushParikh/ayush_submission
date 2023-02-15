import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ContentBlock
        title={"Dashboard"}
        content={"View users"}
        icon="developer.svg"
        id="intro"
      />
    </Container>
  );
};

export default Home;
