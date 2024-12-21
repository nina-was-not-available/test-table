import s from './UiSelect.module.scss'
import clsx from "clsx";

import {TOptionType} from "../../../entities";
import {IconNavArrow} from "../../../assets";
import {useMenu} from "../../hooks";
import {UiMenu} from "../ui-menu";
import {useState} from "react";

type Props = {
    options: TOptionType[]
    handleChange: (option: TOptionType) => void
}


export function UiSelect({options, handleChange}: Props) {
    const {isOpen, setIsOpen, menuRef} = useMenu()
    const [currentOption, setCurrentOption] = useState(options[0])

    function handleOptionClick(option: TOptionType) {
        handleChange(option)
        setCurrentOption(options.find(el => el.value === option.value) || options[0])
        setIsOpen(!isOpen)
    }

    return (
        <div ref={menuRef} className={clsx(s.ui_select, isOpen && s.ui_select__open)}>
            <div className={clsx(s.ui_select__toggle)} onClick={() => setIsOpen(!isOpen)}>
                <div className={s.ui_select__inner}>{currentOption.label}</div>
                <img src={IconNavArrow} className={s.ui_select__icon} alt="nav-arrow"/>
            </div>
            <UiMenu isOpen={isOpen} classname={s.ui_select__body}>
                {options.map((el, i) => (
                    <div key={el.value} onClick={() => handleOptionClick(el)}
                         className={clsx(s.ui_select__option, i === options.length - 1 && s.ui_select__last_item)}>
                        {el.label}
                    </div>
                ))}
            </UiMenu>
        </div>
    );
}
