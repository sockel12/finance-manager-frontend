import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { useAuth } from './AuthProvider';

function Profile() {
    const { user, authenticated } = useAuth();

    return (
        <div className="App">
            <h1>Welcome, {user?.name}!</h1>

        </div>
    );
}

export default Profile;


