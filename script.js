function printAnimals(animal,a) {
 a = prompt("Введите число");
    
    for(let i = 0;i<a;i++){
        document.write('<img src=\"images/'+animal+'.jpg" width = "100">');
            if (i % 10 == 0) { 
                document.write("<br>");
         } 
}
}
printAnimals("dog");
printAnimals("cat");
