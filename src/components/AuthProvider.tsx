import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext<AuthContext>({
    login: async () => { return false; },
    logout: async () => { return false; },
    user: null,
    loading: false,
    error: null,
    authenticated: false
});

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [cookies, setCookies] = useCookies(['token']);

    console.log(cookies);

    const login = async (data: LoginData) => {
        setLoading(true);
        setError(null);

        try {
            console.log('Login');
            const loginRes = await axios.post('http://localhost:3000/login', { username: data.username, password: data.password }, { withCredentials: true, headers: { 'Content-Type': 'application/json' } });

            console.log(JSON.stringify(loginRes));

            console.log('Get User');
            const user = await axios.get<User>('http://localhost:3000/me');
            setUser(user.data);
            setAuthenticated(true);
            return true;
        }
        catch (_) {
            setError('Login failed');
            setAuthenticated(false);
            return false;
        }
        finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        setError(null);

        try {
            setUser(null);
            await axios.post('/logout');
            return true;
        }
        catch (_) {
            // Not logged in
            setError('Logout failed');
            return false;
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = cookies.token; // Assuming you store the user token in a cookie

        if (token) {
            // Fetch user data using the token and update the user state
            axios.get<User>('http://localhost:3000/me', { withCredentials: true })
                .then((response) => {
                    setUser(response.data);
                    setAuthenticated(true);
                    setLoading(false);
                })
                .catch((error) => {
                    setError('Authentication failed');
                    setAuthenticated(false);
                    setLoading(false);
                });
        } else {
            setUser(null); // No token found, user is not authenticated
            setAuthenticated(false); // No token found, user is not authenticated
            setLoading(false); // No token found, set loading to false
        }
    }, [cookies]);

    return (
        <AuthContext.Provider value={{ user, login, logout, error, loading, authenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}