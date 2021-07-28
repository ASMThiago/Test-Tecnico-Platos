import React, { useEffect, useContext, useState } from 'react';
import DrinkCard from '../components/Cards/DrinkCard';
import Header from '../components/Header/Header';
import DrinkContext from '../context/DrinkContext';
import fetchDrinks from '../services/fetchDrinks';
import './styles/DrinksCard.css';

function Alert(array) {
  return (array && array.length === 0)
    ? alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    : null;
}

const Drinks = () => {
  const { drinks, requestDrinks } = useContext(DrinkContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetchDrinks().then((data) => {
        requestDrinks(data);
        setLoading(false);
      });
    }, []);

  return loading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <Header title={'Bebidas'} />
      <div className="cards-wrap">{drinks &&
        drinks.map((drink, index) => {
          if (index < 12) {
            return <DrinkCard drink={drink} index={index} />;
          }
          return null;
        })}</div>
      {Alert(drinks)}
    </section>
  );
};

export default Drinks;
