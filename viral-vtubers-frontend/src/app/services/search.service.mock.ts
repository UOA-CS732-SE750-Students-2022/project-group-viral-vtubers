import { SearchService } from './search.service';

export const mockSearchService = (props: MockSearchServiceProps) => ({
  setSearch: (search: string) => {},
});

export const mockSearchServiceProvider = (props: MockSearchServiceProps) => ({
  provide: SearchService,
  useValue: mockSearchService(props),
});

export interface MockSearchServiceProps {
  placeholder?: null;
}
