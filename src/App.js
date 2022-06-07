import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

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

  return (
    <main>
      <Form item={item} setItem={setItem} className="clearfix" />
      <section>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
        <List
          listItems={listItems}
        />}
      </section>
    </main>
  );
}

export default App;
