import {Theme, Themes} from '../models/theme';

const light: Theme = {

name: 'light',
colors:{
    backgroundPrimary: 'rgb(70, 130, 180)',
    backgroundSecondary: 'rgb(234, 240, 241)'
    // backgroundSecondary: '#d8e5e0'
}

}
const dark: Theme = {

    name: 'dark',
    colors:{
        backgroundPrimary: 'rgba(43, 89, 124, 1)',
        backgroundSecondary: 'rgba(118, 153, 180, 1)'
    }
    
    }
    
export const themes: Themes={light,dark}; 