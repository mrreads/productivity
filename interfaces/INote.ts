export default interface INote {
    id: string,
    title: string,
    content: string | null,
    delete: boolean
    created_at: number,
    date: number,
}