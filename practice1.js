                                    // Qustion 1

function gradeCalculator(){ 

    let result = prompt("Please enter your result:");

    const GPA=(result)=>{
        if(result>=80 && result<=100)
            return "A+"
        else if(result>=70 && result<80)
            return "A"
        else if(result>=60 && result<70)
            return "A-"
        else if(result>=50 && result<60)
            return "B"
        else if(result>=40 && result<50)
            return "c"
        else if(result>=33 && result<40)
            return "D"
        else if(result>=0 && result<33)
            return "F"
        else
            return "Invalid Input"
    }

    document.getElementById("gpa").textContent=`Your GPA is ${GPA(result)}`
}

                                  // Qustion 2

function oddOrEven(){
    let num = prompt("Please enter your number:");

    const ans = (num) =>{
        if(num%2==0)
            return "Even"
        else
            return "ODD"
    }
    document.getElementById("oddEven").textContent=`Your number is ${ans(num)}`
}                               
                                  // Qustion 3

function sorting(){
    let size = prompt("Please enter your array size:");

    let array = []
    
    for(let i=0;i<size;i++)
    {
        array[i]= parseInt(prompt(`Enter number for index ${i} :`))
    }
    let tmp
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[i]>array[j])
            {
                tmp = array[i]
                array[i] = array[j]
                array[j] = tmp
            }
        }
    }     

    document.getElementById("sorting").textContent=`Your sorted array is here : ${array}`
}                               

                                  // Qustion 4

function leapYear(){
    let year = parseInt(prompt("Please enter your year:"));

    const isLeapYear = (year) =>{
        if(year%4==0)
            if(year%100==0)
                if(year%400==0) return "Leap Year"
                else return "not Leap Year"
            else
                return "Leap Year"
        else
            return "not Leap Year"
    }
    document.getElementById("year").textContent=`This year is ${isLeapYear(year)}`
}   
                                  // Qustion 5

function divisible(){
    let ans = []
    
    for(let i=1;i<=50;i++)
    {
        if(i%5==0 || i%3==0)
        {
            ans.push(i)
        } 
    }
    
    document.getElementById("number").textContent=`${ans}`
}   

                                  // Qustion 6

function biggestName(){
    var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
    
    const findBiggestName= (names)=>{
        let biggestName = ""
        for(let name of names)
        {
            if(name.length > biggestName.length)
            {
                biggestName = name
            }
        }
        return biggestName
    }
    document.getElementById("name").textContent=`${findBiggestName(friends)}`
}   

                                  // Qustion 7

function removeDuplicateFindUnique(){
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    // var numbers = [1, 2, 3, 3,3,9,9,9,1,1,1,6,6,7,7,8, 4, 4, 5, 6, 7, 8, 9, 10];
    
    const findUnique= (nums)=>{
        let uniqueNums = []
        let duplicate = []
        nums.sort((a, b) => a - b);
        for(let i=0;i<nums.length;i++)
        {
            if(nums[i]==nums[i-1])
            {
                duplicate.push(nums[i])
            }
            else
            {
                uniqueNums.push(nums[i])
            }
        }
        return uniqueNums
    }
    document.getElementById("unums").textContent=`${findUnique(numbers)}`
}   

                                  // Qustion 8

function findBiggestNum(){
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    // var numbers = [23,234,34,24,78,58,589,7694,58458,4,1,10,20];
    
    const biggestnum= (nums)=>{
        let biggest = 0
        // nums.sort((a, b) => a - b);
        for(let num of nums)
        {
            if(num > biggest)
            {
                biggest = num
            }
        }
        return biggest
    }
    document.getElementById("bigNum").textContent=`${biggestnum(numbers)}`
}   

                                  // Qustion 9

function calculateSavings(){
    let income = []
    for(let i=0;i<3;i++)
    {
        income[i]= parseInt(prompt(`Enter your income of mounth ${i+1} : `))
    }
    let livingCost = parseInt(prompt("Enter Your Living cost :"))
    const totalSavings=(income,livingCost)=>{
        let totalIncome = 0
        for(let num of income)
        {
            if(num >= 3000)
            {
                let vat = 20/100*num 
                totalIncome += (num-vat)
            }
            else
            {
                totalIncome += num
            }
        }
        const totalSave = totalIncome - livingCost
        if(totalSave >= 0)
        {
            return totalSave
        }
        else
        {
            return "Earn More"
        }
    }
    document.getElementById("svaings").textContent=`${totalSavings(income,livingCost)}`
} 



