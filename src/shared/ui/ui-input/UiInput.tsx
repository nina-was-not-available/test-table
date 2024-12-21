import {ChangeEvent} from "react";
import clsx from "clsx";

import {IconNavArrow} from "../../../assets";
import s from './UiInput.module.scss';

type Props = {
    icon?: boolean
    classname?: string
    iconClassname?: string
    placeholder?: string
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string
};

export function UiInput({icon = false, classname, iconClassname, placeholder, value, handleChange}: Props) {
    return (
        <div className={clsx(s.ui_input, classname)}>
            <input onChange={handleChange} value={value} placeholder={placeholder} type="text"
                   className={clsx(s.ui_input__input)}/>
            {icon && <img src={IconNavArrow} className={clsx(s.ui_input__icon, iconClassname)} alt="nav-arrow"/>}
        </div>
    );
}