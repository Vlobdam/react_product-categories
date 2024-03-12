/* eslint-disable max-len */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import { Table } from './components/Table/Table';
import { Filters } from './components/Filters/Filters';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(categoryFromServer => categoryFromServer.id === product.categoryId);
  const user = usersFromServer.find(userFromServer => userFromServer.id === category.ownerId);

  return {
    ...product,
    category,
    user,
  };
});

function filterByUser(productsArray, user) {
  return productsArray.filter(product => product.user.name === user);
}

function getPreparedProducts(prods, { userFilter, searchFieldQuery, categoryFilterArray }) {
  let preparedProducts = [...prods];

  if (userFilter) {
    preparedProducts = filterByUser(preparedProducts, userFilter);
  }

  if (searchFieldQuery) {
    preparedProducts = preparedProducts.filter(product => product.name.toLowerCase().includes(searchFieldQuery.toLowerCase()));
  }

  return preparedProducts;
}

export const App = () => {
  const [userFilter, setUserFilter] = useState('');
  const [searchFieldQuery, setSearchFieldQuery] = useState('');
  const [categoryFilterArray, setCategoryFilterArray] = useState([]);

  const preparedProducts = getPreparedProducts(products, { userFilter, searchFieldQuery, categoryFilterArray });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <Filters
            userFilter={userFilter}
            setUserFilter={setUserFilter}
            searchFieldQuery={searchFieldQuery}
            setSearchFieldQuery={setSearchFieldQuery}
            categoryFilterArray={categoryFilterArray}
            setCategoryFilterArray={setCategoryFilterArray}
          />
        </div>

        <Table products={preparedProducts} />
      </div>
    </div>
  );
};
