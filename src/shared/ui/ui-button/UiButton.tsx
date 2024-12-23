import s from "./UiButton.module.scss";
import {ButtonHTMLAttributes} from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    full?: boolean
    size?: 'sm' | 'md'
}

export function UiButton({full = false, size = 'md', disabled = false, children, onClick}: Props) {
    return (
        <button disabled={disabled} onClick={onClick} className={clsx(s.ui_button, full && s.ui_button__full, s[`ui_button__size_${size}`])}>
            { children }
        </button>
    );
}
