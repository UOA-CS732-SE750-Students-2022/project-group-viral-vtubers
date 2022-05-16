import { ToastrService } from "ngx-toastr";

export const mockToastrService = ({ success }: ToastrServiceProps) => ({
  success: success || (() => {}),
})

export const mockToastrServiceProvider = (props: ToastrServiceProps) => ({
  provide: ToastrService,
  useValue: mockToastrService(props),
})

export interface ToastrServiceProps {
  success?: ( message?: string, title?: string, override?: {}) => void
}
