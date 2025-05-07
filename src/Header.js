import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      padding: '1.5rem',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      {/* 상단 타이틀 + 로그인/회원가입 */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginLeft: '2rem'
        }}>
        <img 
          src="/title.jpg" 
          alt="키덕 로고"
          style={{ height: '120px' }} 
        />
        <span style={{
          fontSize: '1.5rem',
          color: '#555',
          fontWeight: '500',
          whiteSpace: 'nowrap'
        }}>
          기계식 키보드 추천 ⌨
        </span>
      </div>

        <div style={{ fontSize: '1.1rem' }}>
          <Link to="/login" style={{
            marginRight: '1rem',
            color: '#555',
            textDecoration: 'none'
          }}>LOGIN</Link>
          <Link to="/signup" style={{
            color: '#555',
            textDecoration: 'none'
          }}>회원가입</Link>
        </div>
      </div>

      {/* 검색창 영역 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.75rem',
        flexWrap: 'wrap',
        marginTop: '1rem',
        maxWidth: '100%'
      }}>
        <input 
          type="text" 
          placeholder="검색어를 입력하세요" 
          style={{
            width: '800px',
            maxWidth: '95vw',
            padding: '0.8rem 1.2rem',
            borderRadius: '10px',
            border: '1px solid #ccc',
            backgroundColor: '#FFFDBF',
            fontSize: '1.1rem',
            textAlign: 'center', // 텍스트 가운데 정렬
            boxSizing: 'border-box'
          }}
        />
        <button style={{
          padding: '0.6rem 1.2rem',
          backgroundColor: '#B8F5DC', // 민트색
          color: '#333',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '1.2rem',
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }}>
          🔍
        </button>
      </div>
    </header>
  );
}

export default Header;
