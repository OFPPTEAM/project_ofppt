import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'groupFormateur'})

export class GetGroupFormateur implements PipeTransform {

    transform(array: any[], cin: any[]):any[] {
        return array.filter(x => x.cin_Formateur = cin)
    }
    
}

