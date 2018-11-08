import { TestBed, async} from '@angular/core/testing';
import { RecipeitemComponent } from './recipeitem.component';

describe('Recipeitem component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RecipeitemComponent]
        });
    }) 

    it('should create the app ', () => {
        let fixture = TestBed.createComponent(RecipeitemComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    })
});
