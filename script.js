

 let studentRecords = [ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ] 


// let name = studentRecords.name.toUpperCase();
//                 console.log(name)



         for( let i=0; i< studentRecords.length; i++){
                if(studentRecords[i].marks>50)
                {
                    document.write("Name:"+studentRecords[i].name + ","+" "+ "id:"+ studentRecords[i].id + " " + " <br>")
                }
            }




            for( let i=0; i < studentRecords.length; i++){
            if(studentRecords[i].marks>50 && studentRecords[i].id>120)
            {
                document.write("Name:"+studentRecords[i].name + ","+" "+ "id:"+ studentRecords[i].id + " " + " ")}
        }
            


        let a = 0; 
            for(let i in studentRecords){
                let b = studentRecords[i].marks
                a = a + b
            }
            console.log(a)



       
        
        for(let i=0; i < studentRecords.length; i++){
            if(studentRecords[i].marks>50){
                document.write("Name:"+studentRecords[i].name + " ")
            }
        }




        let sum1 = 0;
        for(let i=0; i < studentRecords.length; i++){
        if(studentRecords[i].id>120)
        {
            sum1  = sum1+studentRecords[i].marks;
                    document.write(sum + "")
                }
            }


          



    let sum = 0; 
    for(let i = 0;i< studentRecords.length;i++){
        if(studentRecords[i].marks>50){
            sum=sum+studentRecords[i].marks
            document.write(sum+"")
        }
        else{
            let add = studentRecords[i].marks+15;
            document.write(add+"")
        }
    }




    let sixobjects = [
        {name : "eswar" , id : 1 , rollno: 06},
        {name : "eswar1" , id : 2 , rollno: 05},
        {name : "eswar2" , id : 3 , rollno: 04},
        {name : "eswar3" , id : 4 , rollno: 03},
        {name : "eswar4" , id : 5 , rollno: 02},
        {name : "eswar5" , id : 6 , rollno: 01}
    
    ]
    console.log(sixobjects)
    for(let i=0; i< sixobjects.length; i++)
    document.write(" Name: " +sixobjects[i].name +" ," + " id: " + sixobjects [i] .id + " ," + " " + " Rollno :" + sixobjects[i].rollno +"< br>") 




