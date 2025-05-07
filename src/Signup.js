import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (form.password !== form.confirmPassword) {
            setErrorMessage('❌ 비밀번호가 일치하지 않습니다.');
            return;
        }
        setErrorMessage('');
        setIsSubmitted(true);
    };

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#FFFDBF'
        }}>
            <button
                onClick={() => navigate('/')}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '2rem',
                  backgroundColor: '#FFED9B',
                  color: '#333',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.6rem 1.4rem',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
            >
                🏠
            </button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#FFFDBF'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '700px',
                    backgroundColor: '#fff',
                    padding: '4rem',
                    borderRadius: '16px',
                    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
                    textAlign: 'left'
                }}>
                    {!isSubmitted ? (
                        <>
                            <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', textAlign: 'center' }}>회원가입</h2>

                            {[
                                { label: '아이디', name: 'username', type: 'text' },
                                { label: '비밀번호', name: 'password', type: 'password' },
                                { label: '비밀번호 확인', name: 'confirmPassword', type: 'password' },
                                { label: '이름', name: 'name', type: 'text' },
                                { label: '휴대전화', name: 'phone', type: 'text' }
                            ].map(({ label, name, type }) => (
                                <div key={name} style={fieldStyle}>
                                    <label style={labelStyle}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                            ))}

                            {errorMessage && (
                                <p style={{
                                    color: '#e74c3c',
                                    marginBottom: '1rem',
                                    fontWeight: '500',
                                    fontSize: '0.95rem'
                                }}>
                                    {errorMessage}
                                </p>
                            )}

                            <button onClick={handleSubmit} style={buttonStyle}>가입하기</button>
                        </>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>✅ 회원가입이 완료되었습니다!</h2>
                            <button onClick={() => navigate('/login')} style={buttonStyle}>
                                로그인 페이지로 이동
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const fieldStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
};

const labelStyle = {
    width: '130px',
    fontWeight: 'bold',
    fontSize: '1rem'
};

const inputStyle = {
    flex: 1,
    padding: '0.75rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '1rem'
};

const buttonStyle = {
    width: '100%',
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#B8F5DC',
    color: '#333',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '1.2rem',
    cursor: 'pointer'
};

export default Signup;
