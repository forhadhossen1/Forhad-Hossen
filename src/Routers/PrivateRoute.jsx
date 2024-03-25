
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const adminPassword = 'admin420';

const PrivateRoute = ({ children }) => {
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
        return children;
    }

    return (
        <div className='flex h-[97vh] justify-center items-center'>
            <div>
                <h2 className='text-xl font-bold pb-5'>Please enter the password to access the dashboard:</h2>
                <div className='flex flex-col gap-5'>
                    <input className='text-black rounded-md p-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='text-xl bg-gray-700' onClick={handleLogin}>Login</button>
                </div>
                {loginAttempted && !authenticated && <p>Invalid password. Please try again.</p>}
            </div>
        </div>
    );
};

export default PrivateRoute;
