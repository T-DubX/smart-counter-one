import './App.css'
import {Counter} from "./components/counter/Counter.tsx";
import {CounterSetting} from "./components/counterSetting/CounterSetting.tsx";
import styles from './components/counter/Counter.module.css'

function App() {

    return (
        <div className={styles.container}>
            <Counter/>
            <CounterSetting/>
        </div>
    )
}

export default App
