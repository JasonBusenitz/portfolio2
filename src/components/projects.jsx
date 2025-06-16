import Git from "./project_components/git";
import Css from "./project_components/css";
import Html from "./project_components/html";
import JavaScript from "./project_components/javaScript";
import React from "./project_components/react";
import Node from "./project_components/node";
import '../assets/css/projects.css';
import NextJS from "./project_components/nextJS";

export default function Projects() {
    return (
        <>
            <Html />
            <Css />
            <JavaScript />
            <Git />
            <Node />
            <NextJS />
            <React />
        </>
    )
}