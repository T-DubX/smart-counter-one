import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.tsx";
import {incrementCountAC, resetCountAC} from "../../store/counterReducer.tsx";
import {setErrorAC} from "../../store/settingsReducer.tsx";
import styles from './Counter.module.css'

export const Counter = () => {
    const counter = useSelector<AppRootStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.setting.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.setting.startValue)
    const disabled = useSelector<AppRootStateType, boolean>(state => state.setting.disabled)

    const dispatch = useDispatch()

    if (startValue === maxValue || maxValue <= 0 || startValue < 0) {
        const actionError = setErrorAC(true)
        dispatch(actionError)
    }

    const onClickIncrementHandler = () => {
        const action = incrementCountAC()
        counter < maxValue && dispatch(action)

    }

    const onClickResetHandler = () => {
        const action = resetCountAC(startValue)
        dispatch(action)
    }

    const disabledIncBtn = counter > maxValue || counter === maxValue || disabled
    const disabledResBtn = counter === startValue || startValue < 0 || disabled

    let message = 'Enter values and press "set"'

    const invalidValue = maxValue <= startValue || startValue < 0 || maxValue < 0

    if (invalidValue) message = 'Incorrect value!'

    return (
        <div className={styles.counterWrapper}>
            {disabled ? <span>{message}</span> : <span> counter: {counter}</span>}

            <div className={styles.btnWrapper}>
                <button onClick={onClickIncrementHandler} disabled={disabledIncBtn}>inc</button>
                <button onClick={onClickResetHandler} disabled={disabledResBtn}>res</button>
            </div>
        </div>
    );
};

