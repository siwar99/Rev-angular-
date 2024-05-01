import { Component } from '@angular/core';
import {ProjectService} from "../../Services/project.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  listProjet: any;

  constructor(private  cons :ProjectService,private router:Router) {
  }
  ngOnInit() {
    //this.listProducts = this.Ps.listProducts;
    this.cons.getProjet().subscribe(
      (data)=>this.listProjet=data,
    )
  }

  addTask(i: any) {
    this.router.navigate(['addTask/'+i.id]);

  }
}
