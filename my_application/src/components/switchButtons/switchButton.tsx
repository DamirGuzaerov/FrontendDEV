import React, {useEffect, useState} from 'react';
import styles from './button/button.module.sass'
import {Button} from "./button/button";
export function SwitchButton(){

    const [isFirstClicked,setIsFirstClicked] = useState(true)
    const [isSecondClicked,setIsSecondClicked] = useState(false)
    function clickHandlerFirst() {
        if (isSecondClicked)
        {
            setIsFirstClicked(true)
            setIsSecondClicked(false);
        }
    }
    function clickHandlerSecond(){
        if (isFirstClicked)
        {
            setIsFirstClicked(false)
            setIsSecondClicked(true);
        }
    }

    let firstBtn =
        <Button className={isFirstClicked?styles.active:styles.noActive} type = "button" value="Буду смотреть" onClick={clickHandlerFirst} />
    let secondBtn =
        <Button className={isSecondClicked?styles.active:styles.noActive} type = "button"  value="Просмотрено" onClick={clickHandlerSecond} />
    return (
        <>
            {firstBtn}
            {secondBtn}
        </>
    )
}