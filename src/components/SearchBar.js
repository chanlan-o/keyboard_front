import React, { useState } from 'react';
import searchIcon from '../images/search.png'; // 검색 아이콘 경로

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log("검색어:", searchQuery);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="Search-Section">
            <div className="Search-Container">
                <input
                    type="text"
                    className="Search-text"
                    placeholder="AI 키워드 추천 검색"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <button onClick={handleSearch} className="Search-Icon-Container">
                <img src={searchIcon} alt="검색 아이콘" className="Search-icon" />
            </button>
        </div>
    );
};

export default SearchBar;