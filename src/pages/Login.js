import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#FFFDBF'
        }}>
            {/* 홈 버튼 */}
            <button
                onClick={() => navigate('/')}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '2rem',
                  backgroundColor: '#B8F5DC',
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

            {/* 로그인 박스 */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '700px',
                    backgroundColor: '#fff',
                    padding: '4rem',
                    borderRadius: '16px',
                    boxShadow: '0 0 16px rgba(0,0,0,0.05)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '2rem' }}>로그인</h2>
                    <input type="text" placeholder="아이디" style={inputStyle} />
                    <input type="password" placeholder="비밀번호" style={inputStyle} />
                    <button onClick={() => navigate('/')} style={buttonStyle}>로그인</button>
                </div>
            </div>
        </div> // ✅ 여기가 return의 마지막 닫힘
    );
}
const inputStyle = {
    display: 'block',
    width: '100%',
    marginBottom: '1rem',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    boxSizing: 'border-box'
};

const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#B8F5DC',
    color: '#333',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1.1rem',
    cursor: 'pointer'
};

export default Login;
