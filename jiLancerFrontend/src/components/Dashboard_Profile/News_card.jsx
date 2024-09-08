import { useEffect, useState } from 'react';

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Dummy fetch, replace with real API call
    setNews([
      { title: 'Project A Launched', description: 'Description of project A' },
      { title: 'New feature added', description: 'Details about the feature' },
    ]);
  }, []);

  return (
    <div className="bg-[#C9DABF] text-[#5F6F65] p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      <ul className="list-disc list-inside">
        {news.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
