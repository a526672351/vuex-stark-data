# vuex-stark-data
Used to manage data sharing between micro-applications

## Installation

```bash
npm i vuex-stark-data --save
```

## Feature
- Sub-application subscribes to main application data changes
- Sub-application notifies the main application event

## Usage
### StarkData

```js
// Framework
import { starkData } from 'vuex-stark-data'
 
new Vuex.Store({
	plugins: [starkData],
})
 
// Sub-application A
import { starkData } from 'vuex-stark-data'
 
function showData(data) {
  console.log(`showData is ${data}`);
}
 
store.on('dataKey', showData);
store.off('dataKey', showData); 
```

### Event
```js
// Framework
import { event } from 'vuex-stark-data'
 
function freshMessage(needFresh) {
    // What do you want to do
    console.log(needFresh)
}
 
event.on('freshMessage', freshMessage);
 
// Sub-application A
import { event } from 'vuex-stark-data'
 
event.emit('freshMessage', false);
// ...
event.emit('freshMessage', true);
```

## Questions & Suggestions

Please open an issue [here](https://github.com/a526672351/vuex-stark-data/issues).

## License

[MIT](https://github.com/a526672351/vuex-stark-data/blob/master/LICENSE)