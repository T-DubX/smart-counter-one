import './App.css'
import {Counter} from "./components/counter/Counter.tsx";
import {CounterSetting} from "./components/counterSetting/CounterSetting.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store.tsx";
import {setCounterAC} from "./store/counterReducer.tsx";
import {setMaxValueAC, setStartValueAC} from "./store/settingsReducer.tsx";
import styles from './components/counter/Counter.module.css'

function App() {

    const counter = useSelector<AppRootStateType, number>(state => state.counter.count)

    const dispatch = useDispatch()

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        const minCountAsString = localStorage.getItem('min')
        const maxCountAsString = localStorage.getItem('max')

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)

            dispatch(setCounterAC(newValue))
        }

        if (minCountAsString) {
            let newValue = JSON.parse(minCountAsString)
            dispatch(setStartValueAC(newValue))
        }


        if (maxCountAsString) {
            let newValue = JSON.parse(maxCountAsString)
            dispatch(setMaxValueAC(newValue))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])



    return (
        <div className={styles.container}>
            <Counter/>
            <CounterSetting/>
        </div>
    )
}

export default App
