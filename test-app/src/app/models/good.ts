export class Good{
    constructor(
        public ProductId:number=0,
        public ColorIdx:number=0,
        public ProductCode:string='',
        public ProductDescription:string='',
        public Price:number=0,
        public VoDatum:any=null,
        public IsHeavy:boolean=false,
        public RestrictedLands:any=null,
        public IsFsk:boolean=false,
        public IsOrdergruppeC:boolean=false)
    {

    }
}