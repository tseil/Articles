type Article = {
    serial_number?: number,
    name?: string,
    type?: 'consommable' | 'outillage',
    creation_date?: Date,
    modification_date?: Date,
    status?: 'A réparer' | 'En bon état',
    isArchived?: boolean,
    isDeleted?: boolean,
}