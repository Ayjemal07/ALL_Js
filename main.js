//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (let name=0; name<dog_names.length; name++)
    {
        if (dog_string.includes(dog_names[name])){
            return "Matched dog_name: "+ dog_names[name];
        }

    return "No Matches"

    }
}

console.log(findWords())

// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

arr =["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    out=[]

    for (let item=0; item<arr.length; item++){
        if (item%2==0){
            out.push("even index")
        }
        
        else{
            out.push(arr[item])
        }
        }
    return out
    }

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]