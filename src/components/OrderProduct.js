import React, { useState } from 'react';

const dummyProduct = [
  {
    id: '1',
    name: 'iPhone 11'
  },
  {
    id: '2',
    name: 'Samsung Note 10'
  }
];

function OrderProduct() {
  const [order, setOrder] = useState([]);

  const addProductToOrder = (id, name) => {
    const checkProductExisted = order.findIndex(
      product => product.name === name
    );

    if (checkProductExisted === -1) {
      setOrder([
        ...order,
        {
          id,
          name,
          amount: 1
        }
      ]);
    } else {
      const newOrder = order.map(data => {
        if (data.name === name) {
          return {
            ...data,
            amount: data.amount + 1
          };
        }
        return data;
      });
      setOrder(newOrder);
    }
  };

  return (
    <div>
      <ul>
        {dummyProduct.map(data => (
          <React.Fragment key={data.id}>
            <li>{data.name}</li>
            <button
              onClick={() => addProductToOrder(parseInt(data.id), data.name)}>
              add to order
            </button>
          </React.Fragment>
        ))}
      </ul>

      <ul>
        {order &&
          order.map(data => (
            <React.Fragment key={data.id}>
              <li>
                {data.name} <span>{data.amount}</span>
              </li>
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
}

export default OrderProduct;
