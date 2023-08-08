import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
import PullToRefresh from 'react-pull-to-refresh';


const CardList: React.FC = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(`https://hypehire.vercel.app/api/books`);
    const newCards = response.data.data; // Replace with your API response structure
    setCards((prevCards) => [...prevCards, ...newCards]);
    setPage(page + 1);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    const response = await axios.get(`https://hypehire.vercel.app/api/books`);
    const newCards = response.data.data;
    setCards(newCards);
    setRefreshing(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-list">
        <PullToRefresh onRefresh={handleRefresh}>
        <div className="pull-to-refresh-container">
        {refreshing && <div className="loader">Loading...</div>}
      <InfiniteScroll
        dataLength={cards.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.8}
      >
        <div className="card-row">
          {cards.map((card: any, index) => (
            <Card
              key={index}
              coverImage={card.coverImage}
              title={card.title}
              price={card.discountRate}
              discountRate={card.price}
            />
          ))}
        </div>
      </InfiniteScroll>
      </div>
      </PullToRefresh>
    </div>
  );
};

export default CardList;
