import {BehaviorSubject} from "rxjs";
import {TTableType} from "../../../entities";

class TableService {
    constructor() {
    }

    public tableBs = new BehaviorSubject<TTableType[]>([])

    public handleCreate(tableValues: TTableType) {
        this.tableBs.next([...this.tableBs.getValue(), tableValues])
        console.log(this.tableBs.getValue())
    }
}

export const tableService = new TableService()