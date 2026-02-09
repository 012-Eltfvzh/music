import React, { useState } from 'react';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [user, setUser] = useState(null);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const menuItems = [
        { name: 'Beranda', href: '#' },
        { name: 'Peminjaman', href: '#Peminjaman' },
        { name: 'Tentang Kami', href: '#footer' },
    ];

    const handleLogin = async () => {
        const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('token', data.token);
            setUser(data.user);
            setShowModal(false);
        } else {
            alert(data.message);
        }
    };

    const handleRegister = async () => {
        const res = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });

        const data = await res.json();

        if (res.ok) {
            alert('Register berhasil, silakan login');
            setIsRegister(false);
        } else {
            alert(data.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 shadow-md py-2.5">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <span className="text-xl font-bold">🎶</span>

                    <div className="hidden md:flex gap-6">
                        {menuItems.map((item, i) => (
                            <a key={i} href={item.href} className="text-white hover:text-purple-700">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-80">
                        <h2 className="text-lg font-bold mb-4">
                            {isRegister ? 'Register' : 'Login'}
                        </h2>

                        {isRegister && (
                            <input
                                type="text"
                                placeholder="Nama"
                                className="w-full border p-2 mb-2"
                                onChange={e =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                        )}

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-2 mb-2"
                            onChange={e =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border p-2 mb-4"
                            onChange={e =>
                                setForm({ ...form, password: e.target.value })
                            }
                        />

                        <button
                            onClick={isRegister ? handleRegister : handleLogin}
                            className="bg-purple-700 text-white w-full py-2 rounded
                            transition-all hover:bg-purple-800 hover:scale-105"
                        >
                            {isRegister ? 'Register' : 'Login'}
                        </button>

                        <p className="text-sm text-center mt-3">
                            {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}
                            <button
                                onClick={() => setIsRegister(!isRegister)}
                                className="text-purple-700 ml-1 hover:underline"
                            >
                                {isRegister ? 'Login' : 'Register'}
                            </button>
                        </p>

                        <button
                            onClick={() => setShowModal(false)}
                            className="text-sm mt-2 w-full text-gray-500 hover:underline"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
