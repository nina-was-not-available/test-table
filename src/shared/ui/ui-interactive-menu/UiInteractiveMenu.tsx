import s from './UiInteractiveMenu.module.scss'

import {optionConfig, TOptionType, TTableType} from "../../../entities";
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
    const [fourthCol, setFourthCol] = useState(optionConfig[0])

    const validateCondition = !!(firstCol.trim() && secondCol.trim() && thirdCol.trim() && fourthCol.value.trim())

    function handleAddTable() {
        if (validateCondition) {
            // const newTable = {
            //     [firstCol]: [],
            //     [secondCol]: [],
            //     [thirdCol]: [],
            //     [fourthCol.label]: [],
            // }

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
                    heading: fourthCol.label,
                    values: []
                },
                id: v4()
            }
            tableService.handleCreate(newTable)
            setFirstCol('')
            setSecondCol('')
            setThirdCol('')
            setIsOpen(false)
        }
    }

    return (
        <div ref={menuRef} className={s.ui_interactive_menu}>
            <UiButton handleClick={() => setIsOpen(!isOpen)} size={"md"}>Create table</UiButton>
            <UiMenu classname={s.ui_interactive_menu__body} isOpen={isOpen}>
                <UiInput value={firstCol} handleChange={(e) => setFirstCol(e.currentTarget.value)} placeholder={'First column'}/>
                <UiInput value={secondCol} handleChange={(e) => setSecondCol(e.currentTarget.value)} placeholder={'Second column'}/>
                <UiInput value={thirdCol} handleChange={(e) => setThirdCol(e.currentTarget.value)} placeholder={'Third column'}/>
                <UiSelect handleChange={(value: TOptionType) => setFourthCol(value)} options={optionConfig}/>
                <UiButton disabled={!validateCondition} handleClick={handleAddTable} full size={"sm"}>ADD</UiButton>
            </UiMenu>
        </div>
    );
}