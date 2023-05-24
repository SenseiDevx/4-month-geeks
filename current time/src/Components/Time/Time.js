import React, { useState, useEffect } from 'react';
import styles from './time.module.css'

function Timer() {
    const [time, setTime] = useState(new Date());
    //const [time, setTime] = useState(new Date()); - определяем состояние time
    // и функцию setTime для обновления состояния. Первоначальное значение состояния
    // устанавливаем равным текущей дате и времени, возвращаемым new Date().

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        //Внутри компонента мы используем React Hooks - useState и useEffect.
        // useState используется для хранения текущего времени, а useEffect
        // используется для того, чтобы обновлять его каждую секунду.

        return () => clearInterval(intervalId);
    });

    return (
        <div>
            <p>Текущее время: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;