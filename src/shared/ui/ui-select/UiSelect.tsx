import s from './UiSelect.module.scss'
import clsx from "clsx";

import {OptionValue, TOptionType} from "../../../entities";
import {IconNavArrow} from "../../../assets";
import {useMenu} from "../../hooks";
import {UiMenu} from "../ui-menu";

type Props = {
    options: TOptionType[]
    label?: string
    value: string | OptionValue
    handleChange: (option: OptionValue) => void
}


export function UiSelect({options, handleChange, label, value}: Props) {
    const {isOpen, setIsOpen, menuRef} = useMenu()


    function handleOptionClick(option: OptionValue) {
        handleChange(option)
        setIsOpen(!isOpen)
    }

    const option = options.find(el => el.value === value)?.label

    return (
        <div ref={menuRef} className={clsx(s.ui_select, isOpen && s.ui_select__open)}>
            <div className={clsx(s.ui_select__toggle)} onClick={() => setIsOpen(!isOpen)}>
                <div
                    className={clsx(s.ui_select__inner, option && s.ui_select__inner__option)}>{option || label}</div>
                <img src={IconNavArrow} className={s.ui_select__icon} alt="nav-arrow"/>
            </div>
            <UiMenu isOpen={isOpen} classname={s.ui_select__body}>
                {options.map((el, i) => (
                    <div key={el.value} onClick={() => handleOptionClick(el.value)}
                         className={clsx(s.ui_select__option, i === options.length - 1 && s.ui_select__last_item)}>
                        {el.label}
                    </div>
                ))}
            </UiMenu>
        </div>
    );
}
