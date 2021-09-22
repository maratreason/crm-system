export interface ITableColumns {
    title?: string;
    key: string | number;
    dataIndex?: string;
    onFilter?: (value: any, record: any) => boolean;
    sorter?: (a: any, b: any) => number;
    defaultSortOrder?: string;
    render?: (text: string) => any;
}
