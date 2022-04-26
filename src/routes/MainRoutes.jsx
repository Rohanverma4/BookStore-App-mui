import React from 'react'
import { Route,Routes } from 'react-router';
import { BookDashboard } from '../components/BookDashboard';
import { CartPage } from '../components/CartPage';

export const MainRoutes = () => {
  return (
      <>
        <Routes>
            <Route path="/" element={<BookDashboard />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
     </>
  )
}
