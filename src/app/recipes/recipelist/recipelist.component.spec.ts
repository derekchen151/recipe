import { TestBed, async} from '@angular/core/testing';
import { RecipelistComponent } from './recipelist.component';
import { RecipeitemComponent } from './recipeitem/recipeitem.component';

describe('RecipeList component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RecipelistComponent,
                           RecipeitemComponent]
        });
    }) 

    it('should create the app ', () => {
        let RLFixture = TestBed.createComponent(RecipelistComponent);
        let RLApp = RLFixture.debugElement.componentInstance;
        let RFixture = TestBed.createComponent(RecipeitemComponent);
        let RApp = RFixture.debugElement.componentInstance;
        expect(RLApp).toBeTruthy();
    })

});
