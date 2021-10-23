import { Redirect, Route, Switch } from 'react-router-dom';
import { ClientesScreen } from '../components/cliente/ClientesScreen';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { RegistrosScreen } from '../components/Registro/RegistrosScreen';
import { Navbar } from '../components/ui/Navbar';

export const PublicRoutes = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/productos" component={ProductsScreen} />
          <Route exact path="/registros" component={RegistrosScreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/clientes" component={ClientesScreen} />
          <Redirect to="/productos" />
        </Switch>
      </div>
    </div>
  );
};
