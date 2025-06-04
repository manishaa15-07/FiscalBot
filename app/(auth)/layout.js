// app/sign-in/[[...sign-in]]/layout.js

import React from "react";

// Optional: for setting page title and description
export const metadata = {
    title: "Sign In",
    description: "Login to your account",
};

// ✅ This is the required layout component
export default function AuthLayout({ children }) {
    return <div className="flex justify-center pt-40">{children}</div>;
}
