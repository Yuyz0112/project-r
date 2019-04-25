import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { GetAppsComponent, GetAppsQuery } from './generated/graphql';
import AppCard from './components/AppCard';
import './App.css';
import 'antd/dist/antd.css';

interface IAppState {
  password: string;
  token: string | null;
  openKeys: Array<string>;
}

const SubMenu = Menu.SubMenu;
class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      password: '',
      token: localStorage.getItem('token'),
      openKeys: [],
    };
    this.login = this.login.bind(this);
    this.initOpenKey = this.initOpenKey.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  login() {
    localStorage.setItem('token', btoa(`admin:${this.state.password}`));
    window.location.reload();
  }

  initOpenKey(data: GetAppsQuery | {}) {
    if (!this.state.openKeys.length && 'apps' in data) {
      this.setState({
        openKeys: [data.apps[0].id],
      });
    }
  }

  onOpenChange(openKeys: string[]) {
    const latestOpenKey: string | void = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1,
    );
    if (!latestOpenKey) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    const { password, token, openKeys } = this.state;
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
        <GetAppsComponent onCompleted={this.initOpenKey}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error || !data) return <p>{error!.message || 'Error :('}</p>;
            return (
              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={this.onOpenChange}
              >
                {data.apps.map(app => (
                  <SubMenu key={app.id} title={app.name}>
                    <AppCard {...app} />
                  </SubMenu>
                ))}
              </Menu>
            );
          }}
        </GetAppsComponent>
      </div>
    );
  }
}

export default App;
