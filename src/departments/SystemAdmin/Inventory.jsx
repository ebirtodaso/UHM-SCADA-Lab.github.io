import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Inventory = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/19uHAJYPDpXzMhz6kOr7Kw-wMmjW28H0rBErGegDYUY4/values/Inventory?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAtUB_NkoudBNBzr1Zyd967cQBtWXHnMuo')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (e) => {
          setIsLoaded(true);
          setError(e);
        },
      );
  }, []);

  if (error) {
    return (
      <Container className="py-3">
        <h3>Error: {error.message}</h3>
      </Container>
    );
  }

  if (!isLoaded) {
    return (
      <Container className="py-3">
        <h3>Loading...</h3>
      </Container>
    );
  }
  return (
    <Table striped bordered responsive="xl">
      <thead>
        <tr>
          {items.values[0].map(item => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody style={{ fontSize: '12px' }}>
        {items.values.slice(1).map(row => (
          <tr>
            {row.map(item => (
              item.includes('VLAN') ? (
                <td>
                  <ul>
                    <li dangerouslySetInnerHTML={{ __html: item.replaceAll('\n', '</li><li>') }} />
                  </ul>
                </td>
              ) : (
                <td>{item}</td>
              )
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Inventory;
