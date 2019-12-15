const { getRandomWordSync, getRandomWord } = require('../word-maker/index');

let fs = require( 'fs' ) ;

// ==================================== Task 1 =====================================

let logger1 = fs.createWriteStream('task1.log', {
    flags: 'w'
});

let i = 1 ;
while( i <= 100 ) {
    logger1.write( i + ": " + getRandomWordSync()+"\n" ) ;
    i++ ;
}

let logger2 = fs.createWriteStream('task2.log', {
    flags: 'w'
});


// ==================================== Task 2 =====================================


i = 1;
while(i<=100){

    if(i%15===0) logger2.write(i+": FizzBuzz\n");
    else if(i%5===0) logger2.write(i+": Buzz\n");
    else if(i%3===0) logger2.write(i+": Fizz\n");
    else logger2.write(i+": "+getRandomWordSync()+"\n") ;


    i++;
}


// ==================================== Task 3.1 =====================================

let logger3_1 = fs.createWriteStream('task3.1.log', {
    flags: 'w'
});

i = 1;
let promises = [] ;
while(i<=100){

    promises[i] = getRandomWord() ;

    i++;
}

Promise.all( promises.map(p => p.catch(() => undefined ) ) ).then(
    ( values ) => {
        for ( let index = 1 ; index < values.length ; index ++ ){

            let word = values[ index ] ;

            logger3_1.write(index+": "+word+"\n") ;
        }
    }
) ;



// ==================================== Task 3.2 =====================================

let logger3_2 = fs.createWriteStream('task3.2.log', {
    flags: 'w'
});


i = 1;
promises = [] ;
while(i<=100){
    promises[ i ] = getRandomWord() ;
    i++;
}

Promise.all( promises.map(p => p.catch(() => undefined ) ) ).then(
    ( values ) => {
        for ( let index = 1 ; index < values.length ; index ++ ){

            let word = values[ index ] ;

            if( word === undefined ) {
                word = "It shouldn't break anything!" ;
            }
            else {
                if( index % 15 === 0 ) word = "FizzBuzz" ;
                else if( index % 5 === 0 ) word = "Buzz" ;
                else if( index % 3 === 0 ) word = "Fizz" ;
            }

            logger3_2.write(index+": "+word+"\n");
        }
    }
);


// ==================================== Task 4.1 =====================================

let logger4_1 = fs.createWriteStream('task4.1.log', {
    flags: 'w'
});


i = 1;

while(i<=100){

    let word;

    try {

        if(i%15===0) {
            word = "FizzBuzz" ;
            getRandomWordSync( { withErrors: true } ) ;
        }
        else if(i%5===0){
            word = "Buzz" ;
            getRandomWordSync( { withErrors: true } ) ;
        }
        else if(i%3===0) {
            word = "Fizz" ;
            getRandomWordSync( { withErrors: true } ) ;
        }
        else word = getRandomWordSync( ) ;
    }
    catch (e) {
        word = "It shouldn't break anything!"
    }

    logger4_1.write(i+": "+word+"\n");

    i++;
}


// ==================================== Task 4.2 =====================================


let logger4_2 = fs.createWriteStream('task4.2.log', {
    flags: 'w'
});


i = 1;
promises = [] ;
while(i<=100){

    if ( (i%3===0) || (i%5===0) ) {
        promises[i]=getRandomWord( { withErrors: true } );

    }
    else {
        promises[i]=getRandomWord()
    }

    i++;
}

Promise.all( promises.map(p => p.catch(() => undefined ) ) ).then(
    ( values ) => {
        for ( let index = 1 ; index < values.length ; index ++ ){

            let word = values[ index ] ;

            if( word === undefined ) {
                word = "It shouldn't break anything!" ;
            }
            else {
                if( index % 15 === 0 ) word = "FizzBuzz" ;
                else if( index % 5 === 0 ) word = "Buzz" ;
                else if( index % 3 === 0 ) word = "Fizz" ;
            }

            logger4_2.write(index+": "+word+"\n");
        }
    }
);


// ==================================== Task Bonus =====================================


let logger_bonus = fs.createWriteStream('task_bonus.log', {
    flags: 'w'
});


i = 1;
promises = [] ;
while(i<=100){

    if ( (i%3===0) || (i%5===0) ) {
        promises[i]=getRandomWord( { withErrors: true } );

    }
    else {
        promises[i]=getRandomWord()
    }

    i++;
}

Promise.all( promises.map(p => p.catch(() => undefined ) ) ).then(
    ( values ) => {
        for ( let index = 1 ; index < values.length ; index ++ ){

            let word = values[ index ] ;

            if( word === undefined ) {
                word = "It shouldn't break anything!" ;
            }
            else {
                if( index % 15 === 0 ) word = "FizzBuzz" ;
                else if( index % 5 === 0 ) word = "Buzz" ;
                else if( index % 3 === 0 ) word = "Fizz" ;
            }

            logger_bonus.write(index+": "+word+"\n");
        }
    }
);
