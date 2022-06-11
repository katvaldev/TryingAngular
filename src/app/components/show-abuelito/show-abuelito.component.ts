import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IAbuelito } from "src/app/models/IAbuelito";
import { AbuelitoService } from "src/app/services/abuelito.service";

@Component({
  selector: "app-show-abuelito",
  templateUrl: "./show-abuelito.component.html",
  styleUrls: ["./show-abuelito.component.css"],
})
export class ShowAbuelitoComponent implements OnInit {
  public loading = false;
  public abueId: string | null = null;
  public abue: IAbuelito = {} as IAbuelito;
  public errorMessage: string | null = null;

  constructor(
    private activatedroute: ActivatedRoute,
    private abueService: AbuelitoService
  ) {}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params) => {
      this.abueId = params.get("abueId");
    });
    if (this.abueId) {
      this.loading = true;
      this.abueService.getAbue(this.abueId).subscribe(
        (data) => {
          this.abue = data;
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      );
    }
  }

  public isNotEmpty() {
    return Object.keys(this.abue).length > 0;
  }
}
