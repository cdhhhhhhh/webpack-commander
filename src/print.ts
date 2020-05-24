let a:string = '222'
console.log(a);

export function printts() {
    console.log("prsssint me");
    new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        });
    });
}
export default function () {
    console.log("default me");
}
