import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { EMPTY, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CustomPreloading implements PreloadingStrategy {
    // `preload` вызывается для каждого лениво загружаемого пути, кроме того, что уже загружен
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data?.['preload']) {
            // если хотим предзагрузить чанк - возвращаем из метода результат вызова функции полученной во втором аргументе метода `preload` - `load()`
            return load();
        }

        // если предзагрузка не требуется - возвращаем поток с `null` - `of(null)`
        // return of(null);
        return EMPTY;
    }
}