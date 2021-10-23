import { AppRouter } from './routers/AppRouter';
import { CssBaseline } from '@nextui-org/react';
export const TodoApp = () => {
  return (
    <>
      <AppRouter />
      <CssBaseline />
    </>
  );
};
