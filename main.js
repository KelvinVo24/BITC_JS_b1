/* Bài 1: Viết chương trình nhập vào một chuỗi nếu độ dài của chuỗi ít nhất là 3 - thêm "ing" vào chuỗi đó, 
trường hợp chuỗi kết thúc bằng "ing" - thêm "ly". */


function checkStringVerb(str){
    var bai = "Bài 1 :"
    if (str.length >= 3) {
        // -3 là lấy 3 kí tự cuối cùng của chuỗi, điều kiện phải có length, âu kê con dê
        if(str.substring(str.length -3) == "ing"){
            str += "ly";
            console.log(bai + str);
        } 
        else {
            str += "ing";
            console.log(bai + str);

        } 
    }else{
        console.log(bai + str);
    }
}

checkStringVerb("go");
checkStringVerb("play");
checkStringVerb("running");
checkStringVerb("an3tocom");


// Bài tập 2:
// Viết một hàm nhận một chuỗi làm đầu vào và trả về một chuỗi mới 
// với tất cả các chữ cái viết hoa được viết thường và tất cả các chữ cái viết thường được viết hoa.

// let str = prompt("Nhập vào một chuỗi: ");

function changeString(str){
    var newString = "";
    for (let i = 0; i < str.length; i++){
        //Vòng lặp lấy từng kí tự trong chuỗi có chữ in hoa 
        if(str[i] == str[i].toUpperCase()){
            //Sau đó thay thế kí tự in hoa thành chữ thường
            newString+= str[i].toLowerCase();
        }else{
            //Ngược lại nếu vòng lặp phát hiện chữ thường thì auto thành in hoa
            newString+= str[i].toUpperCase();
        }
    }
    console.log(`Bài 2: ` + newString);
}
changeString("An3ToCom");

// // Bài tập 3: Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử "không phải số" được xóa bỏ.
// *input:[1, "a", 2, "b", 3] output: [1, 2, 3]
// *gợi ý:
// filter(): Lọc một mảng bằng cách chỉ giữ lại các phần tử thỏa mãn một điều kiện nhất định.
// isNaN(): Kiểm tra xem một giá trị có phải là số ko.

function filter(array){
    //sử dụng method filter trên mảng để tạo mảng mới cho biến newArr
    let newArr = array.filter(function(array){
        return !isNaN(array);
    })
    console.log("Bài 3:")
    console.log(newArr);
}

filter([2, "a", 4, "b", 5]);

//Cách 2
var arr = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
var newarr2 = [];
for (var i = 0; i < arr.length; i++){
    if(!isNaN(arr[i])){
        newarr2.push(arr[i]);
    }
}
console.log("Bài 3, cách 2:")
console.log(newarr2);


//Bài 4

var numbers = [50, 1, 6, 8];
//Sắp sếp số từ bé đến lớn, nếu ngược lại thì b-a
console.log("Bài 4:")
console.log(numbers.sort(function(a,b){
    return a-b;
}));






//Bài 5 Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử được nhân với 2.

var arrayBai5 = [1, 2, 3, 4];
let arrayMultiple = arrayBai5.map(length => length * 2);
console.log("Bài 5: ")
console.log(arrayMultiple);


// Bài tập 6 Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới chỉ có số lẻ.

var arrayBai6 = [1, 2, 3, 4, 5, 6, 7];
let arrayOdd = arrayBai6.filter(arrayBai6 => arrayBai6 % 2);
console.log("Bài 6: ")
console.log(arrayOdd);

//Cách 2: xài push
let odd = [];
for (var i = 0; i < arrayBai6.length; i++){
    if(arrayBai6[i] % 2){
        odd.push(arrayBai6[i]);
    }
}
console.log("Bài 6, cách 2: ")
console.log(odd);

//Bài 7: Bài tập 7
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử lặp lại được loại bỏ.
//Sử dụng Set trong F8, dùng để tập hợp các mảng duy nhất
var arrayBai7 = [1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2]
console.log("Bài 7: ")
console.log([...(new Set(arrayBai7))]);


//Cách 2
function arrayDuplicate(arr){
    var uniqueArray = [];
    for(var i = 0; i< arr.length; i++){
        //Duyệt từng phần tử, nếu phần tử chưa xuất hiện trong uniqueArray sẽ auto = -1, 
        // nếu đã xuất hiện thì không phải -1, vòng lặp sẽ bỏ qua mảng đó
        if(uniqueArray.indexOf(arr[i]) === -1){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
console.log("Bài 7, cách 2: ")
console.log(arrayDuplicate(arrayBai7));








