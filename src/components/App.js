import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';
import TransactionsHistory from './TransactionHistory/TransactionHistory';
import Section from './Section/Section';

import user from '../json/user.json';
import statData from '../json/statistical-data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export default function App() {
  return (
    <Section>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Section>
  );
}
