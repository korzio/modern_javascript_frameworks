```html
<label for="name">Name</label>
  <input 
  id="name" 
  type="text" 
  [(ngModel)]="user.name"
  name="name"
  #name="ngModel"
  required
  minlength="4" 
  maxlength="24">
  <div *ngIf="name.errors && (name.dirty || name.touched)">
  <div [hidden]="!name.errors.required">
  Name is required
  </div>
  <div [hidden]="!name.errors.minlength">
  Name must be at least 4 characters long.
  </div>
  <div [hidden]="!name.errors.maxlength">
  Name cannot be more than 24 characters long.
  </div>
  </div>
```

# Links

- [Forms Rangle.io Angular Training](https://angular-2-training-book.rangle.io/handout/forms/)
