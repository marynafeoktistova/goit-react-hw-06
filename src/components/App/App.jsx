import ContactList from '../ContactList/ContactList';

import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import s from './App.module.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
