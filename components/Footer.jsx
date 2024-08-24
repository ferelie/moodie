import React from "react";

export default function Footer(props) {
    const {fugaz} = props
  return <footer className="p-4 sm:p-8">
<p className={`text-center `+fugaz.className}>Copyright of <span className="textGradient">Moodie</span> &copy; {new Date().getFullYear()}</p>  </footer>;
}
