import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => {
  return (
    <div>
      <h1>The Auth Page - {props.appName}</h1>
      <User name="Tiago" age={22} />
    </div>
  );
};

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super app (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
