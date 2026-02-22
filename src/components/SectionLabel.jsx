import { useState, useEffect } from "react";
export default function SectionLabel({ label }) {
  return (
    <p style={{
      textAlign:"center",
      color:"#fd9644",
      letterSpacing:"0.2em",
      fontSize:"0.7rem"
    }}>
      {label}
    </p>
  );
}