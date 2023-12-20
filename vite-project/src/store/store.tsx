import {applyMiddleware, combineReducers, createStore} from 'redux';
import {counterReducer} from "./counterReducer.tsx";
import {settingsReducer} from "./settingsReducer.tsx";
import {loadState, saveState} from "./localstorage/localstorage-utils.ts";
import {thunk} from "redux-thunk";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
    setting: settingsReducer
})
const persistedState = loadState();
// непосредственно создаём store
export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния

store.subscribe(() => {
    saveState(store.getState())
})
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
