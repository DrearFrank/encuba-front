import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../../services/producto.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  productos: any[] = [];
  productForm!: FormGroup;
  constructor(private productoService: ProductoService,private fb: FormBuilder) {}

  ngOnInit(): void {
   this.caragarproductos();
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['']
    });

  }
caragarproductos(){
  this.productoService.listar().subscribe((res: any) => {
    this.productos = res;
  });
}
  eliminar(id: number) {
    this.productoService.eliminar(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id !== id);
    });
  }
  addProduct(): void {

      this.productoService.push(this.productForm.value).subscribe(() => {
      this.productForm.reset({ price: 0 });
        this.caragarproductos();// limpia y deja 0 como precio
      });
  }

  }
