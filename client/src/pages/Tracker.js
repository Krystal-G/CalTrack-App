import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer";
import { GlobalProvider } from "../context/GlobalState";
const Tracker = () => {
  return (
    <div className="tracker-container">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl py-8 mb-10 rounded bg-ltgreen">CalTrack</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
