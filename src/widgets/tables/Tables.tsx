import s from './Tables.module.scss'
import {useEffect, useState} from "react";
import { TTableType} from "../../entities";
import {tableService, UiTable} from "../../shared";



export function Tables() {
    const [tables, setTables] = useState<TTableType[]>(tableService.tableBs.getValue())

    useEffect(() => {
        const subscription = tableService.tableBs.subscribe(setTables)
        return () => subscription.unsubscribe()
    }, []);

    const rows = tables.reduce<TTableType[][]>((acc, table, index) => {
        const rowIndex = Math.floor(index / 3);
        if (!acc[rowIndex]) acc[rowIndex] = [];
        acc[rowIndex].push({ ...table, id: table.id });
        return acc;
    }, []);

    return (
        <div className={s.tables}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={s.tables__row} data-count={row.length}>
                    {row.map((table, index) => (
                        <UiTable table={table} key={index} />
                    ))}
                </div>
            ))}
        </div>
    );
}


