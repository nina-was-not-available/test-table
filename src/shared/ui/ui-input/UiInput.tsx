import {InputHTMLAttributes} from "react";
import clsx from "clsx";

import {IconNavArrow} from "../../../assets";
import s from './UiInput.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    icon?: boolean
    iconClassname?: string
}

export function UiInput({icon = false, iconClassname, placeholder, value, onChange}: Props) {
    return (
        <div className={s.ui_input}>
            <input onChange={onChange} value={value} placeholder={placeholder} type="text"
                   className={s.ui_input__input}/>
            {icon && <img src={IconNavArrow} className={clsx(s.ui_input__icon, iconClassname)} alt="nav-arrow"/>}
        </div>
    );
};

