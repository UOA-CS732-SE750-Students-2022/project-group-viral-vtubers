import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const uploadURL = 'http://localhost:8080/upload';

const downloadURL = 'http://localhost:8080/download';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private httpClient: HttpClient) {}

  async upload(file: File): Promise<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const result = await firstValueFrom(
      this.httpClient.post(uploadURL, formData, {
        responseType: 'text' as const,
      })
    );

    return downloadURL + '/' + result;
  }
}
