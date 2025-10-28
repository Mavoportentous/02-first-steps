import { test, describe, expect} from "vitest";
import { render,screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () =>{
     test( 'should render firstName and lastName');
      const {container} = render (<MyAwesomeApp />);
        screen.debug();
        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Miguel');        
});