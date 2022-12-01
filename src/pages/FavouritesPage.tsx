import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import HomePage from './HomePage';

export default function FavouritesPage() {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0) return <p className="text-center">No items</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((elm) => (
          <li key={elm}>
            <a href={elm} target="_blank">
              {elm}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
