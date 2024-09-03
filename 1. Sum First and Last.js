function sumFirstAndLast(nums) {
    let result = Number(nums.shift()) + Number(nums.pop());
    console.log(result);
}
sumFirstAndLast(['20', '30', '40']);
