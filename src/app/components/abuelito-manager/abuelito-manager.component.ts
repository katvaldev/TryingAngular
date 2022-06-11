import { Component, OnInit } from "@angular/core";
import { IAbuelito } from "src/app/models/IAbuelito";
import { AbuelitoService } from "src/app/services/abuelito.service";

@Component({
  selector: "app-abuelito-manager",
  templateUrl: "./abuelito-manager.component.html",
  styleUrls: ["./abuelito-manager.component.css"],
})
export class AbuelitoManagerComponent implements OnInit {
  public loading: boolean = false;
  public abuelitos: IAbuelito[] = [];
  public errorMessage: string | null = null;

  constructor(private abueService: AbuelitoService) {}

  ngOnInit(): void {
    this.loading = true;
    this.abueService.getAllAbues().subscribe(
      (data: IAbuelito[]) => {
        this.abuelitos = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
