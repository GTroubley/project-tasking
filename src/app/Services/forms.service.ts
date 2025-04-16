import { Injectable, signal } from '@angular/core';
import { FormView } from '../Types/types.model';

@Injectable({ providedIn: 'root' })
export class FormsService {
    form = signal<FormView>({
        form: undefined,
        isOpen: false,
    });
}
