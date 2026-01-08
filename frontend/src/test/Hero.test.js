import React from 'react';
import {render,screen} from '@testing-library/react'; //re-display
import '@testing-library/jest-dom/extend-expect'; //delay the check->eg.backend fetching delay
import Hero from '../landing_page/home/Hero'; 

//Test Suite->Multiple test cases can be run at a time
//Results will be reflected in terminal
describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    });
    test('renders signup button',()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole('button',{name:'/signup now/'});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary")
    });
});