import React from "react";
const Homebg = dynamic(() => import("./../components/3DBg/Homebg"));

const Home = () => {
  return (
    <>
      <div id="home">
        <Homebg />
      </div>
    </>
  );
};

export default Home;
