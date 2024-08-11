import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { map, Observable, tap } from "rxjs";

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.canActivate().pipe(
    tap((permission: boolean) => {
      if (!permission) {
        router.navigate(['/login']);
      }
    })
  );
};
