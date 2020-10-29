import React from "react";
import module from "./ListMidle.module.css";

const ListMidle = (props) => {
  return (
    <div className={module.Text}>
      <h1>
        <img alt="It" src="https://s.dou.ua/storage-files/pm-300.png"></img>
        Middle Version control. Here it is necessary to clarify that we you need
        to understand how the Git process works, what commits are, how there is
        a release technically, but the manager will not be involved in the
        implementation project (check pull requests, release technically) is the
        role of the team. In this case, coordination is required from the
        manager process, but not its implementation. Gitflow: Also one of the
        best Git models. Understanding how a product assembly (build) is
        created, delivery (deployment) to the desired environment (environment
        (s): development, staging, production). What is Continuous Integration
        (CI), that is, continuous code integration (very frequent system updates
        (your project code), but in small parts, and the subsequent automation
        of this process).
      </h1>
    </div>
  );
};

export default ListMidle;
