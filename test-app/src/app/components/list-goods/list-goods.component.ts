import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/models/good';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-list-goods',
  templateUrl: './list-goods.component.html',
  styleUrls: ['./list-goods.component.css']
})
export class ListGoodsComponent implements OnInit {

  goods:Good[]=[]
  selectedGood?:Good
  constructor(private goodService:GoodsService) { }

  ngOnInit(): void 
  {
      this.goodService.getGoods()
      .subscribe(x=>{
        this.goods=x
      })
  }
  selectGood(good:Good)
  {
      this.selectedGood=good;
      console.log(this.selectedGood)
  }
  deleteSelectedGood(){
      this.selectedGood=undefined;
  }

  

}
