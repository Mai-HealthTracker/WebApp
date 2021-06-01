export class Icon {
    icon_id!:number;
    name!:string;
    tag!:string;
    selected!:boolean;
    count!:number;
    constructor(name:string,tag:string,selected:boolean,count:number){
        this.icon_id = 0;
        this.name = name;
        this.tag = tag;
        this.selected =selected;
        this.count = count;
    }
}
