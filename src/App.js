import userData from './data/user.json';
import statData from './data/statistical-data.json';
import friendData from './data/friends.json';
import transactions from './data/transactions.json';
import CardsList from './components/userProfile/CardsList';
import StatisticalList from './components/statistical/StatisticalList';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactions/TransactionHistory';

export default function App() {
  return (
    <div>
      <CardsList items={userData} />
      <StatisticalList title="Upload stats" data={statData} />
      <StatisticalList data={statData} />
      <FriendList data={friendData} />
      <TransactionHistory data={transactions} />
    </div>
  );
}
