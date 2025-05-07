import React, { useState } from 'react';

function FilterForm() {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    manufacturer: [],
    connection: [],
    weight: [],
    material: [],
    backlight: [],
    layout: [],
    keyforce: [],
    noise: [],
    switch: [],
    usage: [],
    price: [],
  });

  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const alreadyChecked = prev[category].includes(value);
      if (alreadyChecked) {
        return {
          ...prev,
          [category]: prev[category].filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...prev[category], value]
        };
      }
    });
  };

  const handleSubmit = () => {
    // 임시 더미 데이터
    const dummyResults = [
      { id: 1, name: 'Keychron K8', desc: '텐키리스 무선 기계식 키보드', image: '/keychron_k8.jpeg' },
      { id: 2, name: 'Logitech MX Keys', desc: '무접점 멤브레인 느낌의 타건감', image: '/logitech_mx_keys.png' },
      { id: 3, name: 'Leopold FC750R', desc: '정전용량 무접점, 조용한 타건감', image: '/leopold_fc750r.png' },
      // ...더 추가 가능
    ];
    setResults(dummyResults);
  };

  // 공통 스타일
  const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
  };

  const titleStyle = {
    width: '120px',
    fontWeight: 'bold',
  };

  const optionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginLeft: '1rem',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  };

  return (
    <section>
      <h2 style={{
        backgroundColor: '#FFFDBF',
        padding: '0.5rem 1rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginBottom: '1rem'
      }}>
        🧩 필터 설정을 통해 원하는 키보드 찾기
      </h2>

      {/* 제조사 */}
      <div style={boxStyle}>
        <div style={titleStyle}>제조사</div>
        <div style={optionsStyle}>
          {['전체', '로지텍', '커세어', '앱코', '키크론'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('manufacturer', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 연결방식 */}
      <div style={boxStyle}>
        <div style={titleStyle}>연결방식</div>
        <div style={optionsStyle}>
          {['전체', '유선', '무선(블루투스)', '무선(2.4GHz)'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('connection', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 무게 */}
      <div style={boxStyle}>
        <div style={titleStyle}>무게</div>
        <div style={optionsStyle}>
          {['전체', '가벼움 (700g 이하)', '보통 (700g ~ 1.2kg)', '무거움 (1.2kg 이상)'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('weight', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 재질 */}
      <div style={boxStyle}>
        <div style={titleStyle}>재질</div>
        <div style={optionsStyle}>
          {['전체', '플라스틱', '알루미늄', '아크릴'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('material', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 백라이트 */}
      <div style={boxStyle}>
        <div style={titleStyle}>백라이트</div>
        <div style={optionsStyle}>
          {['전체', '레인보우', '단색', 'RGB', '없음'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('backlight', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 키 배열 */}
      <div style={boxStyle}>
        <div style={titleStyle}>키 배열</div>
        <div style={optionsStyle}>
          {['전체', '풀배열', '작은배열'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('layout', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 키압 */}
      <div style={boxStyle}>
        <div style={titleStyle}>키압</div>
        <div style={optionsStyle}>
          {['전체', '가벼움 (35~45g)', '보통 (50~60g)', '묵직함 (65g 이상)'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('keyforce', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 소음 */}
      <div style={boxStyle}>
        <div style={titleStyle}>소음</div>
        <div style={optionsStyle}>
          {['전체', '저소음', '일반'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('noise', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 스위치 */}
      <div style={boxStyle}>
        <div style={titleStyle}>스위치</div>
        <div style={optionsStyle}>
          {['전체', '부드러운 (리니어)', '손 끝에 딸깍 (택타일)', '소리 + 딸깍 (클릭키)'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('switch', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 용도 */}
      <div style={boxStyle}>
        <div style={titleStyle}>용도</div>
        <div style={optionsStyle}>
          {['전체', '게임용', '사무용'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('usage', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 가격 */}
      <div style={boxStyle}>
        <div style={titleStyle}>가격</div>
        <div style={optionsStyle}>
          {['전체', '5만원 이하', '5~10만원', '10~15만원', '15만원 이상'].map(item => (
            <label key={item} style={labelStyle}>
              <input type="checkbox" onChange={() => handleCheckboxChange('price', item)} /> {item}
            </label>
          ))}
        </div>
      </div>

      {/* 검색 버튼 */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            padding: '0.8rem 2rem',
            backgroundColor: '#B8F5DC',
            color: '#333',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          검색
        </button>
      </div>

      {results.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            추천 제품 {results.length}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {results.map(item => (
              <div key={item.id}
                onClick={() => window.open(`/keyboard/${item.id}`, '_blank')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '1.2rem',
                  boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                  cursor: 'pointer'
                }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '30%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '1rem'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.name}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default FilterForm;
