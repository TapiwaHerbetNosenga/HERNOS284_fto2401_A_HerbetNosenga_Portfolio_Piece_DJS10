
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/post")
        .then(response => {
          if (!response.ok) {
            throw new Error('Data fetching failed');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          setError(error.message);
        });
    };

    fetchData();
  }, []);

  return (
    <div id="main">
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <h1>Posts</h1>
          {data.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}  

export default App;



