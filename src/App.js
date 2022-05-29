import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from 'routes/AppRoutes';
import {handleSyncStorage} from "store/slices/cart";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleSyncStorage())
  }, [])

  return (
    <AppRoutes />
  );
}

export default App;
