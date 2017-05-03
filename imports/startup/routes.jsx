import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import {mount} from 'react-mounter';

//Views import
import { App } from '../ui/layouts/App.jsx';
import { Home } from '../ui/views/Home.jsx';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});
