import { Account } from "./Account/Account";
import { Products } from "./Products/Products";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
       
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <Account/>
      <Products/>
    </div>
  );
};
