import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FlixbusCharterService } from "./flixbus-charter.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("FlixbusCharterService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: FlixbusCharterService = TestBed.get(FlixbusCharterService);
    expect(service).toBeTruthy();
  });
});
