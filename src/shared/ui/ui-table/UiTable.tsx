import s from './UiTable.module.scss'
import {TTableType} from "../../../entities";

export function UiTable({table}: { table: TTableType }) {
    return (
        <div className={s.ui_table}>
            <div className={s.ui_table__container}>
                {Object.entries(table).map(([key, value], index) => (
                    <div>
                        <div className={s.ui_table__col} key={index}>{key}</div>
                        {value.map((el, index) => (
                            <div key={index} className={s.ui_table__body}>
                                {el}
                            </div>
                        ))}
                    </div>
                    
                ))}
            </div>
        </div>
    );
}