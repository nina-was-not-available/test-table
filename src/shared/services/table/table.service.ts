import {BehaviorSubject} from "rxjs";
import {TTableType} from "../../../entities";

class TableService {
    constructor() {
    }

    public tableBs = new BehaviorSubject<TTableType[]>([]);

    public handleCreate(tableValues: TTableType) {
        this.tableBs.next([...this.tableBs.getValue(), tableValues]);
    }

    public handleCopy(tableValues: TTableType) {
        this.tableBs.next([...this.tableBs.getValue(), structuredClone(tableValues)]);
    }


    public updateField(tableId: string, key: keyof Omit<TTableType, 'id'>, value: string, cellIndex: number) {
        const tables = this.tableBs.getValue();
        const relatedTables = tables.filter(table => table.id === tableId);
        if (relatedTables.length > 0) {
            relatedTables.forEach(table => {
                table[key].values[cellIndex] = value;
            });
            this.tableBs.next([...tables]);
        }
    }
}

export const tableService = new TableService();
