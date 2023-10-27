interface User {
    name: string
    budget: number
    username: string
    admin: boolean
}

interface Booking {
    id: number
    description: string
    amount: number
    date: Date
}

interface LoginFormData {
    username: string
    password: string
}