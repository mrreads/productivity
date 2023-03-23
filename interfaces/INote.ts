export default interface INote {
    id: string,
    title: string,
    content: string | null,
    delete: boolean
    date: number,
}