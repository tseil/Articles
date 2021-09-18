type Article = {
    Name: string,
    Type: 'Consommable' | "Outillage",
    SerialNumber: Number,
    CreationDate: Date,
    ModificationDate: Date,
    State: 'A réparer' | "En bon état",
    isArchived: boolean,
    isDeleted: boolean
}