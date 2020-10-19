import React from "react";
import LG from "./ListJunior.module.css";

const ListJunior = (props) => {
  return (
    <div className={LG.Text}>
      <h1>
         <img alt='It' src='https://s.dou.ua/storage-files/pm-300.png'></img>
        Jr An understanding of the following basics is required: Client / server
        part (Backend, Frontend). API. HTTP and requests. OOP. Release
        Management is the process responsible for the implementation and quality
        control of (part) of your (code) product deployed in an IT environment.
        Including within the framework of release management, the introduction
        of new versions of software and hardware is introduced. Release is the
        health of the project. Sometimes you need to release more often,
        sometimes not. Next, I will talk about how to manage cross-project
        releases for mid-range projects.
      </h1>
    </div>
  );
};

export default ListJunior;
