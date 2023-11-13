"use client"
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LogoutPage() {
    const {user, error, isLoading } = useUser();
    return (
        <>
            <h1>You are loggout</h1>
            <a href="/api/auth/login">Login</a>
        </>
    )
}