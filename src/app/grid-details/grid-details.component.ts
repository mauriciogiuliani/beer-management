import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css']
})
export class GridDetailsComponent implements OnInit {

  users: any[] = [
    {
      id: 1,
      jobName: "PRINT_VENDOR_STAGING_CA",
      api: "http://dfsvltdmal-sit1.us.dell.com/rest/rs/printvendor/canada/staging",
      method: "POST",
      type: "CYCLIC",
      lastExecution: "12-22-2020 14:00:00 CST",
      status: "RUNNING",
      enabled: true

    }, 
    {
      id: 2,
      jobName: "PRINT_VENDOR_SEND_CA",
      api: "http://dfsvltdmal-sit1.us.dell.com/rest/rs/printvendor/canada/send",
      method: "POST",
      type: "CYCLIC",
      lastExecution: "12-22-2020 14:00:00 CST",
      status: "FAILED",
      enabled: true

    },
    {
      id: 3,
      jobName: "PRINT_VENDOR_STAGING_EMEA",
      api: "http://dfsvltdmal-sit1.us.dell.com/rest/rs/printvendor/emea/staging",
      method: "POST",
      type: "CYCLIC",
      lastExecution: "12-22-2020 14:00:00 CST",
      status: "SUCCESS",
      enabled: false

    },
    {
      id: 4,
      jobName: "PRINT_VENDOR_SEND_EMEA",
      api: "http://dfsvltdmal-sit1.us.dell.com/rest/rs/printvendor/emea/staging",
      method: "POST",
      type: "CYCLIC",
      lastExecution: "12-22-2020 14:00:00 CST",
      status: "ON_HOLD",
      enabled: false

    }
    ,
    {
      id: 5,
      jobName: "PRINT_VENDOR_SEND_EMEA",
      api: "http://dfsvltdmal-sit1.us.dell.com/rest/rs/printvendor/emea/staging",
      method: "POST",
      type: "CYCLIC",
      lastExecution: "12-22-2020 14:00:00 CST",
      status: "SCHEDULED",
      enabled: true

    }
  ];

  constructor() { }

  ngOnInit(): void {



  }

}
