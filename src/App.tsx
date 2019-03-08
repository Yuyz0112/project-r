import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { GetAppsComponent } from './generated/graphql';
import AppCard from './components/AppCard';
import './App.css';
import 'antd/dist/antd.css';

interface IAppState {
  password: string;
  token: string | null;
  openKeys: Array<string>;
  rootSubmenuKeys: string[];
}

const SubMenu = Menu.SubMenu;
class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      password: '',
      token: localStorage.getItem('token'),
      openKeys: ['0'],
      rootSubmenuKeys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
    };
    this.login = this.login.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }


  login() {
    localStorage.setItem('token', btoa(`admin:${this.state.password}`));
    window.location.reload();
  }

  onOpenChange(openKeys: string[]) {
    const latestOpenKey: any = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    console.log(latestOpenKey)
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    const { password, token } = this.state;
    if (!token) {
      return (
        <div className="Login">
          <input
            placeholder="Enter the password"
            type="password"
            value={password}
            onChange={evt => this.setState({ password: evt.target.value })}
          />
          <button onClick={this.login}>Login</button>
        </div>
      );
    }
    return (
      <div className="App">
        <GetAppsComponent>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error || !data) return <p>{error!.message || 'Error :('}</p>;
            return <Menu
              mode='inline'
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: '100%' }}
            >
              {data.apps.map((app, index) => 
                <SubMenu key={`${index}`} title={app.name}>
                  <AppCard key={app.id} {...app} />
                </SubMenu>
              )}
            </Menu>;
          }}
        </GetAppsComponent>
      </div>
    );
  }
}

export default App;
