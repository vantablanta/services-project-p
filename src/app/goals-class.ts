export class GoalsClass {
    id!: number
    name!: string
    description: string
    date: any

    constructor(id: number, name: string, description: string, date: any){
        this.id = id 
        this.name = name 
        this.description = description
        this.date = date 
    }
}
