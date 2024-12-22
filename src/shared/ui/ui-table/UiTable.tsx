import s from './UiTable.module.scss'
import {TTableType} from "../../../entities";
import clsx from "clsx";
import {tableService} from "../../services";
import {IconCopy} from "../../../assets";
import {ChangeEvent} from "react";

type Props = {
    table: TTableType,
    containerClassName?: string
}


export function UiTable({table, containerClassName}: Props) {
    const MAX_ROWS = 4;


    function handleInputChange(e: ChangeEvent<HTMLInputElement>, key: keyof Omit<TTableType, 'id'>, cellIndex: number) {
        tableService.updateField(table.id, key as keyof Omit<TTableType, 'id'>, e.currentTarget.value, cellIndex)
    }

    function fillValues(values: (string | undefined)[] = []): string[] {
        return [...values.map((v) => v || ""), ...Array(MAX_ROWS - values.length).fill("")];
    }

    return (
        <div className={clsx(s.ui_table, containerClassName)}>
            <div className={s.ui_table__container}>
                {Object.entries(table).map(([key, value], index) => {
                    if (typeof value === 'string') return;
                    return (
                        <div key={index} className={s.ui_table__column}>
                            <div className={s.ui_table__column_heading}>
                                {value.heading}
                                {index === MAX_ROWS - 1 && (
                                    <div className={s.ui_table__copy} onClick={() => tableService.handleCopy(table)}>
                                        Copy
                                        <img src={IconCopy} className={s.ui_table__copy_icon} alt="copy"/>
                                    </div>
                                )}
                            </div>
                            <div
                                className={clsx(s.ui_table__column_values, index === MAX_ROWS - 1 && s.ui_table__column_values__border_right)}>
                                {fillValues(value.values).map((inputValue, cellIndex) => {
                                    return (
                                        <div key={cellIndex} className={clsx(s.ui_table__cell)}>
                                            <input className={s.ui_table__input} value={inputValue || ''}
                                                   onChange={(e) => handleInputChange(e, key as keyof Omit<TTableType, 'id'>, cellIndex)}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}