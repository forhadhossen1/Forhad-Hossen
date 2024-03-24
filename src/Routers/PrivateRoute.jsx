
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const adminPassword = 'admin420';

const PrivateRoute = () => {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [loginAttempted, setLoginAttempted] = useState(false);

    const handleLogin = () => {
        if (password === adminPassword) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
            setLoginAttempted(true); // Set login attempted flag to true
            alert('Invalid password. Please try again.');
        }
    };

    // Redirect to dashboard if authenticated
    if (authenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div>
            <h2>Please enter the password to access the dashboard:</h2>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {loginAttempted && !authenticated && <p>Invalid password. Please try again.</p>}
        </div>
    );
};

export default PrivateRoute;
