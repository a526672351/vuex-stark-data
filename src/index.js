import { store as starkStore, event } from "@ice/stark-data";
import _ from "lodash";

const starkData = (store) => {
    let prevState = _.cloneDeep(store.state)
    store.subscribe((mutation, state) => {
        Object.keys(state).forEach(key => {
            if (!_.isEqual(prevState[key], state[key])) {
                starkStore.set(key, state[key]);
            }
        })
        prevState = _.cloneDeep(state)
    });
}

export {
    starkData,
    starkStore,
    event
};