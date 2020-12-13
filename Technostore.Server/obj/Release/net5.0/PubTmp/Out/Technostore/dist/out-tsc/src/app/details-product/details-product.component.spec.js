import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { DetailsProductComponent } from './details-product.component';
describe('DetailsProductComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [DetailsProductComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=details-product.component.spec.js.map