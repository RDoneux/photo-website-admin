import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import './App.css';
import MainMenu from './MainMenu';
import UploadPage from './upload/UploadPage';
import OrderAndView from './order/OrderAndView';

interface AppProps extends WithStyles<typeof styles> { }

class App extends React.Component<AppProps>{
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainMenu} exact />
            <Route path="/upload" component={UploadPage} exact />
            <Route path="/order&view" component={OrderAndView} exact />
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

const styles = () => createStyles({

})

export default withStyles(styles)(App);
