import { Gallery } from "ng-gallery";

export const mockGalleryService = (props: MockGalleryServiceProps) => ({
  ref: (id?: string) => {},
})

export const mockGalleryServiceMock = (props: MockGalleryServiceProps) => ({
  provide: Gallery,
  useValue: mockGalleryService(props),
})

export interface MockGalleryServiceProps {
  placeholder?: null,
}
