export class GoalsClass {
    id!: number
    name!: string
    description: string
    date: any
    complete :boolean

    constructor(id: number, name: string, description: string, date: any, complete: boolean){
        this.id = id 
        this.name = name 
        this.description = description
        this.date = date 
        this.complete = complete
    }
}
