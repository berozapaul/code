/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortEvenOdd = function(nums) {
    // const evenArr = [], oddArr = [];
    // for (let i = 0; i < nums.length; i++) {
    //    (nums[i] & 1) ? oddArr.push(nums[i]) : evenArr.push(nums[i])
    // }
    // oddArr.sort((a, b) => b - a);
    // evenArr.sort((a, b) => a - b);

    let odd= nums.filter((num,i,arr)=> i%2!=0).sort((a,b)=> b-a); 
    let even= nums.filter((num,i,arr)=> i%2==0).sort((a,b)=> a-b); 
    let x=0,y=0;
    
   nums.forEach((num,i,nums)=> {
        nums[i]= i%2==0 ? even[x++] : odd[y++]; 
    });
    return nums;
};