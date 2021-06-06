import { Observable, Subject, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, finalize, map } from "rxjs/operators";
import { HttpMethod, HttpOptions } from "./http.type";

class HttpService {
  public isRequesting$ = new Subject<boolean>();
  public onError$ = new Subject<any>();

  private _commonHeader = {
    "Accept": "aplication/json",
    "Cache-Control": "no-cache no-store",
    "Pragma": "no-cache",
    "Expires": 0,
    "Access-Control-Allow-Origin": "*",
  };

  public get<T>(uri: string, options?: HttpOptions): Observable<T> {
    return this.request(uri, HttpMethod.GET, options);
  }

  public post<T>(uri: string, options?: HttpOptions): Observable<T> {
    return this.request(uri, HttpMethod.POST, options);
  }

  public put<T>(uri: string, options?: HttpOptions): Observable<T> {
    return this.request(uri, HttpMethod.PUT, options);
  }

  public delete<T>(uri: string, options?: HttpOptions): Observable<T> {
    return this.request(uri, HttpMethod.DELETE, options);
  }

  public request<T>(
    uri: string,
    method: string,
    options?: HttpOptions,
  ): Observable<T> {
    const url = this.resolveUri(uri);

    this.isRequesting$.next(true);
    return ajax({
      url,
      method,
      ...options,
      headers: { ...this._commonHeader, ...options?.headers },
    }).pipe(
      map((ajaxResponse) => ajaxResponse.response),
      catchError((error) => {
        this.onError$.next(error);
        return throwError(() => error);
      }),
      finalize(() => {
        this.isRequesting$.next(false);
      }),
    );
  }

  private resolveUri(uri: string): string {
    if (/^(http|https):\/\/.+$/.test(uri)) {
      return uri;
    }
    return `${process.env.REACT_APP_BASE_API_URL}${uri}`;
  }
}

export default new HttpService();
