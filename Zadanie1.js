function arr_func (arr) {
let number_ct = 0;
let number_nct = 0;
let zero_elements = 0;
    for (let a in arr) {
        a = Number(a)
        if (typeof arr[a] === 'number' || isNaN(arr[a])) {
            continue;
        }
        else {
            if (arr[a] === 0) {
                zero_elements++;
            }
            else if (arr[a] % 2 === 0){
                number_ct++;
            }
            else {
                number_nct++;
            }
        }
    }
    return [zero_elements, number_ct, number_nct];
}

let result = arr_func([1, 23, 0, 'sda', NaN, false, true, 1.1, 33, 22, '100', 500, null]);
console.log(`Количество нулевых элементов: ${result[0]}\nКоличество чётных элементов: ${result[1]}\nКоличество нечётных элементов: ${result[2]}`);