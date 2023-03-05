import './App.css';
import Section from 'common/Section';
import FriendList from './FriendList/FriendList';
import SocialProfile from './SocialProfile/SocialProfile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import friends from '../data/friends.json'
import user from '../data/user.json'
import data from '../data/data.json';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <main className='main-container'>
      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <SocialProfile user={user} />
      </Section>
      
      <Section>
        <Statistics data={data} />
      </Section>
      
      <Section>
        <TransactionHistory transactions={transactions} />
      </Section>
      
    </main>
  );
};
