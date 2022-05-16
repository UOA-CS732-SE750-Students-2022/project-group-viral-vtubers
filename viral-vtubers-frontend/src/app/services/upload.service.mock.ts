import { UploadService } from './upload.service';

export const mockUploadService = (props: MockUploadServiceProviderProps) => ({
  upload: async (file: File) => {},
});

export const mockUploadServiceProvider = (
  props: MockUploadServiceProviderProps
) => ({
  provide: UploadService,
  useValue: mockUploadService(props),
});

interface MockUploadServiceProviderProps {
  placeholder?: null;
}
