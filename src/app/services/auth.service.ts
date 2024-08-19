import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';
import { getAuth, signOut } from "firebase/auth";
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private auth = inject(AngularFireAuth);

  constructor() {
  }

  canActivate(): Observable<boolean> {
    return this.checkIsUserLogin();
  }

  private checkIsUserLogin(): Observable<boolean> {
    return this.auth.authState.pipe(
      map(user => !!user)
    );
  }

  public registerUser(email: string, password: string, nome: string): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user?.updateProfile({
        displayName: nome
      })})
      .catch((err) => {throw err})
  }

  public login(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public signOut() : Promise<any>
  {
    const auth = getAuth();
    return signOut(auth)
      .catch(() => { throw new Error('Erro ao deslogar.') })
  }

  getDisplayName(): string | null {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      return user.displayName;
    }
    return null;
  }

}
