import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.tsx";
import {ChangeEvent} from "react";
import {setDisableAC, setMaxValueAC, setStartValueAC} from "../../store/settingsReducer.tsx";
import {setCounterAC} from "../../store/counterReducer.tsx";
import styles from './CounterSetting.module.css'

export const CounterSetting = () => {
    const maxValue = useSelector<AppRootStateType ,number>(state => state.setting.maxValue)
    const startValue = useSelector<AppRootStateType ,number>(state => state.setting.startValue)
    const disabled = useSelector<AppRootStateType, boolean>(state => state.setting.disabled)
    const dispatch = useDispatch()
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const action = setMaxValueAC(Number(e.currentTarget.value))
        dispatch(action)
        dispatch(setDisableAC(true))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const action = setStartValueAC(Number(e.currentTarget.value))
        dispatch(action)
        dispatch(setDisableAC(true))
    }

    const onClickHandler = () => {
        const actionCounter = setCounterAC(startValue)
        const actionDisabled = setDisableAC(false)
        dispatch(actionCounter)
        dispatch(actionDisabled)

        localStorage.setItem("min", JSON.stringify(startValue))
        localStorage.setItem("max", JSON.stringify(maxValue))

    }

    const isValidMax = maxValue <= 0 || maxValue <= startValue
    const isValidStart = startValue < 0 || startValue >= maxValue

    return (
        <div className={styles.counterSettingWrapper}>
            <label>
                max value:
                <input type="number" value={maxValue} onChange={onChangeMaxValue}/>
            </label>
            <label >
                start value:
                <input type="number" value={startValue} onChange={onChangeStartValue}/>
            </label>

            <button onClick={onClickHandler} disabled={!disabled || isValidMax || isValidStart}>set</button>
        </div>
    );
};

