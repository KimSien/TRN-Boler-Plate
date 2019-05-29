import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import {Hello} from "../src/component/Hello";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Hello',module)
  .add('with hello', () => <Hello compiler="TypeScript" framework="React" />)

import { Provider } from 'react-redux';

import App from '../src/containers/app';
import { configureStore } from '../src/store/configureStore';

const store = configureStore();

storiesOf('App',module)
  .add('with App',() =>   <Provider store={store}>
  <App />
</Provider>)
