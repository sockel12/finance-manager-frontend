
interface AuthContext {
    login: (data: LoginData) => Promise<boolean>
    logout: () => Promise<boolean>
    user: User | null
    loading: boolean, error: string | null
    authenticated: boolean
}

interface LoginData {
    username: string
    password: string
}

interface User {
    username: string
    name: string
    budget: number
}

interface Booking {
    id: number
    amount: number
    description: string
}