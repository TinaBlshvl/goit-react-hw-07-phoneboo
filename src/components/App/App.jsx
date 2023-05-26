import SectionTitle from '../Section';
import PhoneBookForm from 'components/Form/Form';
import Contacts from '../Contacts';

const App = () => {
  return (
    <div>
      <SectionTitle title="Phonebook" />
      <PhoneBookForm />
      <Contacts title={'Contacts'} />
    </div>
  );
};

export default App;
