namespace fibo {
    /**
     * Calcula Fibonacci del número dado
     */
    //% blockId=fibonumber
    //% block="Mostrar Fibonacci de $n"
    export function fibonaccii(n : number) : void{
        if(n==0)
        basic.showNumber(n);
        else if(n==1)
        basic.showNumber(n);
        else{
            let f0 : number = 0;
            let f1 : number = 1;
            let fn : number = 1;
            for(let i = 0; i < n;i++){
                f0 = f1;
                f1 = fn;
                fn = f1 + f0;
            }
            basic.showNumber(fn);
        }
    }
}
