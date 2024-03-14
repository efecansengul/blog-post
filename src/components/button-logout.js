"use client";

import { signOut } from "next-auth/react";

function ButtonLogout() {
  return (
    <button
      style={{
        backgroundColor: "gray",
        border: "none",
        borderRadius: "4px",
        padding: "0.4rem",
        cursor: "pointer",
      }}
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
export default ButtonLogout;
