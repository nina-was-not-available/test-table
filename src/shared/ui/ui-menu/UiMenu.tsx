import s from './UiMenu.module.scss';
import {ReactNode, useState} from "react";
import {useSpring, animated} from "react-spring";
import clsx from "clsx";

type Props = {
    children: ReactNode;
    isOpen: boolean;
    classname?: string
};

export function UiMenu({children, isOpen, classname}: Props) {
    const [display, setDisplay] = useState<'block' | 'none'>('none');

    const animProps = useSpring({
        opacity: isOpen ? 1 : 0,
        config: {duration: 120},
        onRest: () => {
            if (!isOpen) {
                setTimeout(() => setDisplay('none'), 120);
            } else {
                setDisplay('block');
            }
        },
    });

    return (
        <animated.div
            className={clsx(s.ui_menu)}
            style={{
                opacity: animProps.opacity,
                display: isOpen ? 'block' : display,
            }}
        >
            <div className={clsx(s.ui_menu__container, classname)}>
                {children}
            </div>
        </animated.div>
    );
}
