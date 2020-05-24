// import _ from 'lodash';
export default function () {
    console.log("prsssint me");
    new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        });
    });
}
