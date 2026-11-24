number1 = 1;
number2 = 0;
number3 = 0;

for (number1 = 1; number1 < 10; number1++ ) {
    for ( number2 = 0; number2 < 10; number2++ ) { 
        for ( number3 = 0; number3 < 10; number3++ ){
            square = ( number1 * number1 ) + ( number2 * number2 ) + ( number3 * number3 );
            number = ( number1 * 100) + ( number2 * 10 ) + ( number3 );
            if ( square == number ) {
            console.log(number);
            }
        }
    }
}
