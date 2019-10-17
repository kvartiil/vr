import { storiesOf } from '@storybook/html';

storiesOf('Buttons', module)
  .add('primary', () => '<button class="c-btn c-btn--primary">Vaata lähemalt</button>')
  .add('primary disabled', () => '<button class="c-btn c-btn--primary" disabled>Vaata lähemalt</button>')
  .add('secondary', () => '<button class="c-btn c-btn--secondary">Vaata lähemalt</button>')
  .add('secondary disabled', () => '<button class="c-btn c-btn--secondary" disabled>Vaata lähemalt</button>')
  .add('secondary with icon', () => '<button class="c-btn c-btn--secondary">+ Lisan uue konto</button>')
  .add('text', () => '<button class="c-btn c-btn--text">Vaata lähemalt</button>')
  .add('text with icon', () => '<button class="c-btn c-btn--text">+ Lisan andmed</button>');