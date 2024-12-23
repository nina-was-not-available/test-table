import s from './UiInteractiveMenu.module.scss'

import {optionConfig, OptionValue, TTableType} from "../../../entities";
import {useMenu} from "../../hooks";
import {UiButton} from "../ui-button";
import {UiInput} from "../ui-input";
import {UiSelect} from "../ui-select";
import {UiMenu} from "../ui-menu";
import {useState} from "react";
import {tableService} from "../../services";
import {v4} from "uuid";

export function UiInteractiveMenu() {
    const {isOpen, setIsOpen, menuRef} = useMenu()
    const [firstCol, setFirstCol] = useState('')
    const [secondCol, setSecondCol] = useState('')
    const [thirdCol, setThirdCol] = useState('')
    const [fourthCol, setFourthCol] = useState('')

    const validateCondition = !!(firstCol.trim() && secondCol.trim() && thirdCol.trim() && fourthCol.trim())

    function handleAddTable() {
        if (validateCondition) {
            const newTable: TTableType = {
                first: {
                    heading: firstCol,
                    values: []
                },
                second: {
                    heading: secondCol,
                    values: []
                },
                third: {
                    heading: thirdCol,
                    values: []
                },
                fourth: {
                    heading: optionConfig.find(el => el.value === fourthCol)?.label || fourthCol,
                    values: []
                },
                id: v4()
            }
            tableService.handleCreate(newTable)
            setFirstCol('')
            setSecondCol('')
            setThirdCol('')
            setFourthCol('')
            setIsOpen(false)
        }
    }

    return (
        <div ref={menuRef} className={s.ui_interactive_menu}>
            <UiButton onClick={() => setIsOpen(!isOpen)} size={"md"}>Create table</UiButton>
            <UiMenu classname={s.ui_interactive_menu__body} isOpen={isOpen}>
                <UiInput value={firstCol} onChange={(e) => setFirstCol(e.currentTarget.value)} placeholder={'First column'}/>
                <UiInput value={secondCol} onChange={(e) => setSecondCol(e.currentTarget.value)} placeholder={'Second column'}/>
                <UiInput value={thirdCol} onChange={(e) => setThirdCol(e.currentTarget.value)} placeholder={'Third column'}/>
                <UiSelect handleChange={(value: OptionValue) => setFourthCol(value)} value={fourthCol} options={optionConfig} label={'Choose option...'}/>
                <UiButton disabled={!validateCondition} onClick={handleAddTable} full size={"sm"}>ADD</UiButton>
            </UiMenu>
        </div>
    );
}