import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject } from 'rxjs';

import { mockActivatedRoute } from '../../../../test/activated-route';
import { mockGalleryServiceMock } from '../../../../test/gallery.service.mock';
import { Product, ProductVariant } from '../../../schema/type';
import { mockCartServiceProvider } from '../../services/cart.service.mock';
import { mockCategoryServiceProvider } from '../../services/category.service.mock';
import { mockProductService } from '../../services/product.service.mock';
import { mockUserService } from '../../services/user.service.mock';
import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let product: Subject<Product>;

  beforeEach(async () => {
    product = new Subject();
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        mockProductService(product),
        mockUserService(),
        mockCategoryServiceProvider({}),
        mockActivatedRoute(),
        mockGalleryServiceMock({}),
        mockCartServiceProvider({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const testElement = (id: string, root: Element = fixture.nativeElement) =>
    root.querySelector(`[data-test-id="${id}"]`)!;

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind profile image', () => {
    // Prepare
    const IMAGE_URI = 'foo.bar';

    // Test initial state
    expect((testElement('profileImage') as HTMLImageElement).src).not.toContain(
      IMAGE_URI
    );

    // Change state
    product.next({
      artist: { profileImageURI: IMAGE_URI },
    } as unknown as Product);
    fixture.detectChanges();

    // Test final state
    expect((testElement('profileImage') as HTMLImageElement).src).toContain(
      IMAGE_URI
    );
  });

  it('should bind follow button', () => {
    const button = () => testElement('followButton');

    // Prepare
    product.next({
      artist: { isFollowing: false },
    } as unknown as Product);
    fixture.detectChanges();

    // Test initial state
    expect(button()).not.toHaveClass('unfollow-btn');

    // Change state
    product.next({
      artist: { isFollowing: true },
    } as unknown as Product);
    fixture.detectChanges();

    // Test final state
    expect(button()).toHaveClass('unfollow-btn');
  });

  it('should bind name of product', () => {
    // Prepare
    const NAME = 'UWU Girl';

    // Test initial state
    expect(testElement('name').textContent).not.toContain(NAME);

    // Change state
    product.next({
      artist: { name: NAME },
    } as unknown as Product);
    fixture.detectChanges();

    // Test final state
    expect(testElement('name').textContent).toContain(NAME);
  });

  it('should bind breadcrumbs', () => {
    // Prepare
    const CATEGORY = 'cat';
    const SUBCATEGORY = 'short hair';

    // Test initial state
    expect(testElement('categories').textContent).not.toContain(CATEGORY);
    expect(testElement('categories').textContent).not.toContain(SUBCATEGORY);

    // Change state

    product.next({
      subcategory: { category: { name: CATEGORY } },
    } as unknown as Product);
    product.next({
      subcategory: { name: CATEGORY },
    } as unknown as Product);
    fixture.detectChanges();

    // Test final state
    expect(testElement('categories').textContent).toContain(CATEGORY);
    expect(testElement('categories').textContent).toContain(SUBCATEGORY);
  });

  it('should bind numLikes of product', () => {
    // Prepare
    const NUM_LIKES = 3;

    // Test initial state
    expect(testElement('numLikes').textContent).not.toContain(NUM_LIKES);

    // Change state
    product.next({
      numLikes: NUM_LIKES,
    } as unknown as Product);
    fixture.detectChanges();

    // Test final state
    expect(testElement('numLikes').textContent).toContain(NUM_LIKES);
  });

  it('should populate product variants', () => {
    // Prepare
    const VARIANTS: ProductVariant[] = [
      {
        name: 'Variant1',
        price: 420,
        file: 'v1.zip',
        fileTypes: ['exe', 'jpeg'],
      },
      {
        name: 'Variant2',
        price: 69,
        file: 'v2.vrm',
        fileTypes: ['png'],
      },
    ] as ProductVariant[];

    // Test initial state
    document
      .querySelectorAll('.price-details-container')
      .forEach((v, i: number) => {
        expect(testElement('price', v).textContent).not.toContain(
          VARIANTS[i].price
        );
        expect(testElement('name', v).textContent).not.toContain(
          VARIANTS[i].name
        );
        expect(testElement('file', v).textContent).not.toContain(
          VARIANTS[i].file
        );
        v.querySelectorAll('*[data-test-id="fileType"]').forEach((v2, j) => {
          expect(v2.textContent).not.toContain(VARIANTS[i].fileTypes[j]);
        });
      });

    // Test state change
    product.next({
      variants: VARIANTS,
    } as unknown as Product);
    fixture.detectChanges();

    // Test final state
    document
      .querySelectorAll('.price-details-container')
      .forEach((v, i: number) => {
        expect(testElement('price', v).textContent).toContain(
          VARIANTS[i].price
        );
        expect(testElement('name', v).textContent).toContain(VARIANTS[i].name);
        expect(testElement('file', v).textContent).toContain(VARIANTS[i].file);
        v.querySelectorAll('*[data-test-id="fileType"]').forEach((v2, j) => {
          expect(v2.textContent).toContain(VARIANTS[i].fileTypes[j]);
        });
      });
  });

  it('should bind description of product', () => {
    // Prepare
    const DESCRIPTION = "I'm an uwu girl, in an uwu world.";

    // Test initial state
    expect(testElement('description').textContent).not.toContain(DESCRIPTION);

    // Change state
    product.next({
      description: DESCRIPTION,
    } as unknown as Product);
    fixture.detectChanges();

    // Test final state
    expect(testElement('description').textContent).toContain(DESCRIPTION);
  });
});
