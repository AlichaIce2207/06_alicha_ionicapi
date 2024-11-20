import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http:HttpClient,
  ) { }

  // ประกาศตัวแปรฟังก์ชั่นสำหรับดึงข้อมูลจาก API
  datadetail:any=[];

  // ฟังก์ชั่นการเพิ่มข้อมูลที่ส่งไปยัง API
  addData(data:any){
    return this.http.post('http://localhost/class2-4/api/insert.php',data);
  }

  // ฟังก์ชั่นการแสดงข้อมูลจาก API
  listmember(){
    return this.http.get('http://localhost/class2-4/api/listmember.php');
  }

  // ฟังก์ชั่นการแก้ไขข้อมูลจาก API
  editmember(dataEdit:any){
    return this.http.put('http://localhost/class2-4/api/update.php',dataEdit);
  }

  // ฟังก์ชั่นการลบข้อมูลจาก API
  delmem(id:any){
    return this.http.delete('http://localhost/class2-4/api/delete.php?id='+id);
  }
}
