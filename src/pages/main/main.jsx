import React from 'react';
import './main.css';
import Header from '../../components/header/header';
import CardList from '../../components/cardList/CardList';
import {storiesData} from '../../mock/storiesData';


export default function Main() {

  return (
    <>
      <Header />
      <CardList storiesData={storiesData} />
    </>
  );
}
