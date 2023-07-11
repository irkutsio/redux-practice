import { useSelector } from 'react-redux';

export const Balance = () => {
  const news = useSelector(state => state.news.news);
  const isLoading = useSelector(state => state.news.isLoading);

  console.log(news)
  const balance = useSelector(state => state.account.balance);

  return (
    <>
      <p>Ballance: {balance}$</p>
      {isLoading && <p>...loading</p> }
      <ul>
        {news.map(({ title, url }) => {
          return (
            <li key={url}>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
