### Options

Default sizes:

| xxs | xs | s | m | l | xl | xxl |
| --- | -- | - | - | - | --- | ---- |
| 2px | 4px | 8px | 16px | 32px | 64px | 128px |

Inset padding:

```jsx { "props": { "className": "hl-inside" } }
<Panel between="s">
  <Panel inset="xs"><samp>xs</samp></Panel>
  <Panel inset="s"><samp>s</samp></Panel>
  <Panel inset="m"><samp>m</samp></Panel>
  <Panel inset="l"><samp>l</samp></Panel>
</Panel>
```


Squished inset padding (vertical padding is two times smaller than horizontal):

```jsx { "props": { "className": "hl-inside" } }
<Panel between="s">
  <Panel inset="xs" squish><samp>xs</samp></Panel>
  <Panel inset="s" squish><samp>s</samp></Panel>
  <Panel inset="m" squish><samp>m</samp></Panel>
  <Panel inset="l" squish><samp>l</samp></Panel>
</Panel>
```

Only horizontal padding:

```jsx { "props": { "className": "hl-inside" } }
<Panel between="s">
  <Panel x="xs"><samp>xs</samp></Panel>
  <Panel x="s"><samp>s</samp></Panel>
  <Panel x="m"><samp>m</samp></Panel>
  <Panel x="l"><samp>l</samp></Panel>
</Panel>
```

Only vertical padding:

```jsx { "props": { "className": "hl-inside" } }
<Panel between="s">
  <Panel y="xs"><samp>xs</samp></Panel>
  <Panel y="s"><samp>s</samp></Panel>
  <Panel y="m"><samp>m</samp></Panel>
  <Panel y="l"><samp>l</samp></Panel>
</Panel>
```

Margin below:

```jsx { "props": { "className": "hl" } }
<div>
  <Panel below="xs"><samp>xs</samp></Panel>
  <Panel below="s"><samp>s</samp></Panel>
  <Panel below="m"><samp>m</samp></Panel>
  <Panel below="l"><samp>l</samp></Panel>
</div>
```

Vertical margin between:

```jsx { "props": { "className": "hl" } }
<Panel between="m">
  <samp>m</samp>
  <samp>m</samp>
  <samp>m</samp>
</Panel>
```

Horizontal margin between:

```jsx { "props": { "className": "hl-inside" } }
<Panel between="s">
  <Panel between="xs" inline>
    <samp>xs</samp>
    <samp>xs</samp>
    <samp>xs</samp>
  </Panel>
  <Panel between="s" inline>
    <samp>s</samp>
    <samp>s</samp>
    <samp>s</samp>
  </Panel>
  <Panel between="m" inline>
    <samp>m</samp>
    <samp>m</samp>
    <samp>m</samp>
  </Panel>
</Panel>
```

### Enhancing existing components

This way you won’t need to use `tagProps` and you could define default whitespace values.

```jsx { "props": { "className": "hl-inside" } }
// import { spaceman } from 'react-spaceman';
const HeaderBase = ({ children }) => <header><samp>{children}</samp></header>;
const Header = spaceman(Header, { below: 'm' });

<div>
  <Header>Default margin bottom</Header>
  <Header below="l">Custom margin bottom</Header>
</div>
```

### Examples

```jsx
const buttonStyles = jss.createStyleSheet({
  root: {
    fontSize: 16,
    color: 'snow',
    backgroundColor: 'steelblue',
    border: 0,
    borderRadius: 2
  }
}).attach().classes;

const Button = props => <Panel inset="m" squish tag="button" className={buttonStyles.root} tagProps={props}>{props.children}</Panel>;

const tagStyles = jss.createStyleSheet({
  root: {
    backgroundColor: '#c4c9d4',
    borderRadius: 2
  }
}).attach().classes;

const Tag = props => <Panel inset="s" below="s" squish tag="a" className={tagStyles.root} tagProps={props}>{props.children}</Panel>;

const panelStyles = jss.createStyleSheet({
  root: {
    width: 320,
    color: '#333',
    backgroundColor: '#e2e4e9'
  }
}).attach().classes;

<Panel below="l" className={panelStyles.root}>
  <img src="https://images.unsplash.com/photo-1483434748604-140edba26886?dpr=1&auto=compress,format&fit=crop&w=376&h=301&q=80&cs=tinysrgb&crop=" width="320" />
  <Panel inset="m" between="m">
    <Panel between="s">
      <div>Dog</div>
      <h3>Saluki</h3>
      <div>The Saluki is classed as a sighthound and is typically deep-chested and long-legged. Salukis are "sight" hounds—hunting by sight—and run their quarry down to kill or retrieve it.</div>
    </Panel>
    <Panel between="s" inline>
      <Tag href="/sighthounds">Sighthounds</Tag>
      <Tag href="/greyhounds">Greyhounds</Tag>
      <Tag href="/dogs">Dogs</Tag>
    </Panel>
    <Button>Buy a puppy</Button>
  </Panel>
</Panel>
```
