import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
describe('CategoryService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CategoryService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=category.service.spec.js.map