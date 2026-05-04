import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://skillsphere-flame.vercel.app"
    // https://skillsphere-flame.vercel.app
})

export const { signIn, signUp, useSession } = createAuthClient()