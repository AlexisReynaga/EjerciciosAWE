import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgFor,NgIf,ProductDetailComponent,NgClass]
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, img: 'https://th.bing.com/th/id/OIP.4SyeQHbgt2isSbZIurLnSAHaF7?rs=1&pid=ImgDetMain'},
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, img: 'https://th.bing.com/th/id/OIP.rKqsvUUw4urLpifr_3HcowHaHa?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, img: 'https://th.bing.com/th/id/OIP.kdTyWTQaNTiR8rixXtE-vAHaHa?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, img: 'https://i5.walmartimages.com/asr/78b3ec9a-0642-46ea-a328-9ab901add2ff.33bd3c553e77977b1ed66c0915f42a2c.jpeg' },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, img: 'https://mla-s1-p.mlstatic.com/808513-MLA44928824164_022021-F.jpg' },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, img: 'https://media.mipc.com.mx/catalog/product/6/3/63839970.jpg?width=600&height=600&store=default&image-type=image'},
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, img:'https://resources.claroshop.com/medios-plazavip/s2/10252/715330/5be9e863525f1-102557-1600x1600.jpg' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, img: 'https://media.croma.com/image/upload/v1669124926/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262565_10_youun4.png' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, img:'https://www.ofisillas.es/images/product/1/large/pl_1_1_5175.jpg' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, img:'https://th.bing.com/th/id/R.2959e85856afc2be069f6e4d024bf281?rik=8KDAlPUcgov4Sg&pid=ImgRaw&r=0' },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, img:'https://d2ir8gpcv17b65.cloudfront.net/xstorage/1/_cache/PR0178055_b21adf61fd4451cfb212df9942202187_41850_1_d1bd6c0d9534a277fc15d9669af49cee.png' },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, img:'https://image1280.macovi.de/images/product_images/1280/737244_2__8374664-2.jpg' },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true,img: 'https://routermag.com/wp-content/uploads/netgear-r7000p-100nas-nighthawk-wifi-router-r7000p-ac2300-wireless-2048x2048.jpg' },
    { id: 14, name: 'Tarjeta gráfica RTX 5070', price: 500, inStock: true, onSale: false, img:'https://dlcdnwebimgs.asus.com/gain/BBA48A2A-7FBA-45A8-BFC6-6D4360F97769/w717/h525' },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, img:'https://images.macrumors.com/article-new/2022/09/apple-watch-ultra-1.jpg' },
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}
