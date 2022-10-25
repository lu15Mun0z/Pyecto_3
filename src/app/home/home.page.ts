import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  Scan: {};

  constructor(private barcodeScanner: BarcodeScanner) {

    }
    ScanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
          this.Scan = barcodeData;
        })
        .catch(err => {
          console.log("Error", err);
        });
    }


}
