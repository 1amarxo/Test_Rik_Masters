export type UsersDTO = {
    id: number
    name: string
    email: string
    phone: number
    create_at: number
    update_at: number
}
export interface Page {
    total: number
    current: number
    size: number
}
export interface Data {
    user_id: number
    is_admin: boolean
    is_ecp: boolean
    status: string
}

