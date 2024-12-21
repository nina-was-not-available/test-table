import s from "./UiButton.module.scss"
import clsx from "clsx";
import {ReactNode} from "react";

type Props = {
    full?: boolean
    size?: 'sm' | 'md'
    children: ReactNode
    handleClick?: () => void
    disabled?: boolean
}

export function UiButton({full = false, size = 'md', disabled = false, children, handleClick}: Props) {
    return (
        <button disabled={disabled} onClick={handleClick} className={clsx(s.ui_button, full && s.ui_button__full, s[`ui_button__size_${size}`])}>
            { children }
        </button>
    );
}
