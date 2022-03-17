import { AdminService } from '../admin.service';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin'

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  private getAdmins(){
    this.adminService.getAdminList().subscribe(data => {
      this.admins = data;
    });
  }

}
