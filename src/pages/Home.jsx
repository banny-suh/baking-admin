import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const tools = [
    {
      title: '빵 단가 계산기',
      description: '재료비를 기반으로 정확한 빵의 원가와 마진을 계산하세요.',
      path: '/unit-price-calculator',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: '베이킹 스케줄러',
      description: '반죽부터 굽기까지, 완벽한 베이킹 일정을 계획하고 관리하세요.',
      path: '/baking-scheduler',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      title: '물 온도 계산기',
      description: '원하는 반죽 온도를 맞추기 위한 최적의 물 온도를 계산하세요.',
      path: '/water-temperature-calculator',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Baking Admin</h1>
        <p className="hero-subtitle">
          더 맛있는 빵을 위한 스마트한 베이킹 파트너.<br />
          원가 계산부터 스케줄 관리까지 한 곳에서 해결하세요.
        </p>
      </section>

      <div className="dashboard-grid">
        {tools.map((tool, index) => (
          <Link to={tool.path} key={index} className="dashboard-card">
            <div className="card-icon-wrapper">
              {tool.icon}
            </div>
            <h3 className="card-title">{tool.title}</h3>
            <p className="card-description">{tool.description}</p>
            <div className="card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;