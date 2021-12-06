namespace fibo {
    /**
     * Calcula Fibonacci del número dado
     */
    //% blockId=fibonumber
    //% block="Mostrar Fibonacci de $n"
    export function fibonaccii(n : number) : void{
        if(n<=1)
        basic.showNumber(n);
        else{
            let f0 : number = 0;
            let f1 : number = 1;
            let fn : number = 0;
            for(let i = 0; i < n;i++){
                fn = f1 + f0;
                f0 = f1;
                f1 = fn;
            }
            basic.showNumber(fn);
        }
    }
}
fibo.fibonaccii(0);