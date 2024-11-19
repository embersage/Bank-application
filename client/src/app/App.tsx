import { attachLogger } from 'effector-logger';
import Authorization from '../pages/Authorization';

attachLogger();

const App = () => {
  return (
    <>
      <Authorization />
    </>
  );
};

export default App;
