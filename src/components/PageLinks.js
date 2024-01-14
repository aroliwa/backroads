import React from 'react'
import { pageLinks } from "../data";
import PageLink from './PageLink';

const PageLinks = ({itemClass, parentClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
    {pageLinks.map((link, index) => {
      return (
       <PageLink key={index}  link={link} itemClass={itemClass} />
      );
    })}
  </ul>
  )
}

export default PageLinks