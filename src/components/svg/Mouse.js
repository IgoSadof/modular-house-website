import React from "react";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export default function Mouse({
  width = "30",
  height = "48",
}) {
  const bigWidtgh = `${(+width/1920*100).toFixed(2)}vw`
  const bigHeight = `${(+height/1920*100).toFixed(2)}vw`
  const breakpoints = useBreakpoint();
  
  return (
    <svg width={breakpoints.xxl?bigWidtgh:width} height={breakpoints.xxl?bigHeight:height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.5" width="27" height="45" rx="13.5" stroke="#E2E2E2" strokeWidth="3"/>
    <rect x="13" y="13" width="4" height="6" rx="2" fill="#E2E2E2"/>
    </svg>
    
  );
}
