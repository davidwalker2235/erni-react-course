import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import {UserList, RootPage} from "./screens";

function RootNavigator() {
  return (
    <Routes >
      <Route path="/" element={<RootPage />} />
      <Route path="/user-list" element={<UserList />} />
    </Routes >
  )
}

export default RootNavigator;