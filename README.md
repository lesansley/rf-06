# rf-06

## Basic React forms

### Hooks

- `useRef`

By assigning a variable to `useRef()` and then passing that variable as a `ref` prop into an component you are able to access the node object of that component, whcih exposes all the associated `properties` and `methods`.

```
const userNameRef = React.useRef()

const handleChange = () => {
  const userNameInput = userNameRef.current.value
  // Do something with userNameInput
}

<form>
  <input
    id="username"
    onChange={handleChange}
    ref={userNameRef}
    type="text"
  />
</form>
```

- `useState`

`useState()` allows the use of controlled components by assigning the `value` property of a form component to a `state` variable and then updating the `state` variable to reflect user interaction

```
const [userName, setUserName] = useState('')
const userNameRef = React.useRef()

const handleChange = () => {
  const userNameInput = userNameRef.current.value
  setUserName(userNameInput)
}

<form>
  <input
    id="username"
    value={userName}
    onChange={handleChange}
    ref={userNameRef}
    type="text"
  />
</form>
```

### Event properties

```
const handleChange = e => {
  const {value} = event.target
  // Do something with value
}

<form>
  <input
    id="username"
    onChange={handleChange}
    type="text"
  />
</form>
```


