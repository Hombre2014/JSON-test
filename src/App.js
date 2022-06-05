import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const [item, setItem] = useState('users');
  const [listItems, setListItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        if(item !== '') {
          const response = await fetch(`${API_URL}/${item}`);
          if (!response.ok) throw Error('Did not fetch the item');
          const listItems = await response.json();
          setListItems(listItems);
          setFetchError(null);
        }
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, [item]);

  // const buttonType = document.getElementsByTagName("button");
  // let type = buttonType.getAttribute('value');

  return (
    <div className="main">
      <div className="app">
        <button
          type="button"
          value="users"
          onClick={(e) => {setItem(e.target.value)}}
        >
          users
        </button>
        <button
          type="button"
          value="posts"
          onClick={(e) => setItem(e.target.value)}
        >
          posts
        </button>
        <button
          type="button"
          value="comments"
          onClick={(e) => setItem(e.target.value)}
        >
          comments
        </button>
      </div>
      <div className="body">
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <ul>
          {listItems.map((item) => (

            <li key={item.id}>
              <p>{JSON.stringify({ item })}</p>
            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
}

export default App;
